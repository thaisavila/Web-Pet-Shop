from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer
from fastapi.staticfiles import StaticFiles
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from schemas import UsuarioRegistro, UsuarioLogin, TokenResposta, UsuarioResposta, CategoriaResposta, ServicoResumido, \
    ServicoDetalhado, PetResposta, PetRegistro
from security import hash_senha, verificar_senha, criar_access_token, verificar_token
from models import Base, Usuario, Categoria, Servico, Pet

# Configuração do banco de dados (SQLite para desenvolvimento)
DATABASE_URL = "sqlite:///./petshopDB.sqlite"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="API Autenticação")

#CORS: pra fazer a chamada do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/imagens", StaticFiles(directory="imagens"), name="imagens")

security = HTTPBearer()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_usuario_atual(credentials = Depends(HTTPBearer()), db: Session = Depends(get_db)):
    token = credentials.credentials
    payload = verificar_token(token)

    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido ou expirado",
            headers={"WWW-Authenticate": "Bearer"},
        )

    usuario = db.query(Usuario).filter(Usuario.id == payload["usuario_id"]).first()# type: ignore
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")

    return usuario


@app.post("/api/auth/registro", response_model=TokenResposta, status_code=201)
def registrar(dados: UsuarioRegistro, db: Session = Depends(get_db)):
    usuario_existente = db.query(Usuario).filter(Usuario.email == dados.email).first() # type: ignore
    if usuario_existente:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email já cadastrado"
        )
    novo_usuario = Usuario(
        nome=dados.nome,
        email=dados.email,
        senha_hash=hash_senha(dados.senha)
    )
    db.add(novo_usuario)
    db.commit()
    db.refresh(novo_usuario)
    access_token = criar_access_token(dados={"sub": str(novo_usuario.id)})
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "usuario": UsuarioResposta.model_validate(novo_usuario)
    }
@app.post("/api/pets", response_model=PetResposta, status_code=201)
def cadastrar_pet(
    dados: PetRegistro,
    db: Session = Depends(get_db),
    usuario_atual: Usuario = Depends(get_usuario_atual)
    ):
    novo_pet = Pet(
        nome=dados.nome,
        telefone=dados.telefone,
        especie=dados.especie,
        raca=dados.raca,
        idade=dados.idade,
        peso=dados.peso,
        tutor_id=usuario_atual.id
    )
    db.add(novo_pet)
    db.commit()
    db.refresh(novo_pet)
    return novo_pet

@app.post("/api/auth/login", response_model=TokenResposta)
def login(dados: UsuarioLogin, db: Session = Depends(get_db)):
    """Autentica usuário e retorna token de acesso"""

    usuario = db.query(Usuario).filter(Usuario.email == dados.email).first()              # noqa

    if not usuario or not verificar_senha(dados.senha, usuario.senha_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou senha incorretos"
        )

    access_token = criar_access_token(dados={"sub": str(usuario.id)})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "usuario": UsuarioResposta.model_validate(usuario)
    }


@app.get("/api/usuarios/me", response_model=UsuarioResposta)
def obter_perfil(usuario: Usuario = Depends(get_usuario_atual)):
    """Retorna dados do usuário autenticado"""
    return usuario


#categorias
@app.get("/api/categorias", response_model=List[CategoriaResposta])
def listar_categorias(db: Session = Depends(get_db)):
    return db.query(Categoria).all()

@app.get("/api/categorias/{categoria_id}", response_model=CategoriaResposta)
def detalhar_categoria(categoria_id: int, db: Session = Depends(get_db)):
    categoria = db.query(Categoria).filter(Categoria.id == categoria_id).first()                 # noqa
    if not categoria:
        raise HTTPException(status_code=404, detail="Categoria não encontrada")
    return categoria

#serviços
@app.get("/api/categorias/{categoria_id}/servicos", response_model=List[ServicoResumido])
def listar_servicos_por_categoria(categoria_id: int, db: Session = Depends(get_db)):
    categoria = db.query(Categoria).filter(Categoria.id == categoria_id).first()                # noqa
    if not categoria:
        raise HTTPException(status_code=404, detail="Categoria não encontrada")
    return (
        db.query(Servico)
        .filter(Servico.categoria_id == categoria_id)                                               # noqa
        .order_by(Servico.nome)
        .all()
    )

@app.get("/api/servicos/mais-agendados", response_model=List[ServicoResumido])
def servicos_mais_agendados(limit: int = 5, db: Session = Depends(get_db)):
    return (
        db.query(Servico)
        .order_by(Servico.agendamentos.desc()) 
        .limit(limit)
        .all()
    )

@app.get("/api/servicos/{servico_id}", response_model=ServicoDetalhado)
def detalhar_servico(servico_id: int, db: Session = Depends(get_db)):
    """Retorna detalhes completos de um serviço — página 3"""
    servico = db.query(Servico).filter(Servico.id == servico_id).first()                # noqa
    if not servico:
        raise HTTPException(status_code=404, detail="Serviço não encontrado")
    return servico


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
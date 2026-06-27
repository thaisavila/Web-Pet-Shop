from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session


from schemas import UsuarioRegistro, UsuarioLogin, TokenResposta, UsuarioResposta
from security import hash_senha, verificar_senha, criar_access_token, verificar_token
from models import Base, Usuario

# Configuração do banco de dados (SQLite para desenvolvimento)
DATABASE_URL = "sqlite:///./petshopDB.sqlite"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="API Autenticação")

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
    """Cria nova conta de usuário e retorna token de acesso"""

    # Verifica se email já existe
    usuario_existente = db.query(Usuario).filter(Usuario.email == dados.email).first() # type: ignore
    if usuario_existente:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email já cadastrado"
        )

    # Cria novo usuário
    novo_usuario = Usuario(
        nome=dados.nome,
        email=dados.email,
        senha_hash=hash_senha(dados.senha)
    )

    db.add(novo_usuario)
    db.commit()
    db.refresh(novo_usuario)

    # Gera token
    access_token = criar_access_token(dados={"sub": str(novo_usuario.id)})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "usuario": UsuarioResposta.model_validate(novo_usuario)
    }


@app.post("/api/auth/login", response_model=TokenResposta)
def login(dados: UsuarioLogin, db: Session = Depends(get_db)):
    """Autentica usuário e retorna token de acesso"""

    usuario = db.query(Usuario).filter(Usuario.email == dados.email).first() # type: ignore

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


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

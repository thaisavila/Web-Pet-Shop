from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional, List

class UsuarioRegistro(BaseModel):
    nome: str = Field(..., min_length=3, max_length=100)
    cpf: str = Field(..., min_length=11, max_length=14)
    email: EmailStr
    endereco: str = Field(..., min_length=5, max_length=200)
    cidade: str = Field(..., min_length=2, max_length=100)
    senha: str = Field(..., min_length=6)
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "nome": "João Silva",
                "cpf": "123.456.789-09",
                "email": "joao@example.com",
                "endereco": "Rua das Flores, 123",
                "cidade": "Fortaleza",
                "senha": "senha123"
            }
        }
    )

class UsuarioLogin(BaseModel):
    email: EmailStr
    senha: str


class UsuarioResposta(BaseModel):
    id: int
    nome: str
    cpf: str
    email: str
    endereco: str
    cidade: str
    model_config = ConfigDict(from_attributes=True)


class TokenResposta(BaseModel):
    access_token: str
    token_type: str = "bearer"
    usuario: UsuarioResposta


class CategoriaResposta(BaseModel):
    id: int
    nome: str
    descricao: Optional[str]
    imagem_url: Optional[str]
 
    model_config = ConfigDict(from_attributes=True)

class ServicoResumido(BaseModel):
    id: int
    nome: str
    descricao_curta: Optional[str]
    valor_estimado: Optional[float]
    imagem_url: Optional[str]
    agendamentos: int
    categoria_id: int
 
    model_config = ConfigDict(from_attributes=True)

class ServicoDetalhado(BaseModel):
    id: int
    nome: str
    descricao_curta: Optional[str]
    descricao_completa: Optional[str]
    duracao_media: Optional[str]
    profissional: Optional[str]
    cuidados: Optional[str]
    valor_estimado: Optional[float]
    imagem_url: Optional[str]
    agendamentos: int
    categoria_id: int
    categoria: CategoriaResposta
 
    model_config = ConfigDict(from_attributes=True)

class PetRegistro(BaseModel):
    nome: str
    telefone: Optional[str] = None
    especie: str
    raca: Optional[str] = None
    idade: Optional[int] = None
    peso: Optional[float] = None

class PetResposta(BaseModel):
    id: int
    nome: str
    telefone: Optional[str] = None
    especie: str
    raca: Optional[str] = None
    idade: Optional[int] = None
    peso: Optional[float] = None
    tutor_nome: str

    model_config = ConfigDict(from_attributes=True)
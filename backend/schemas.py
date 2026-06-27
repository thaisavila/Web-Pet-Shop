from pydantic import BaseModel, EmailStr, Field

class UsuarioRegistro(BaseModel):
    nome: str = Field(..., min_length=3, max_length=100)
    email: EmailStr
    senha: str = Field(..., min_length=6)

    class Config:
        example = {
            "nome": "João Silva",
            "email": "joao@example.com",
            "senha": "senha123"
        }


class UsuarioLogin(BaseModel):
    email: EmailStr
    senha: str


class UsuarioResposta(BaseModel):
    id: int
    nome: str
    email: str

    class Config:
        from_attributes = True


class TokenResposta(BaseModel):
    access_token: str
    token_type: str = "bearer"
    usuario: UsuarioResposta

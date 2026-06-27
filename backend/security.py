from datetime import datetime, timedelta, timezone
from typing import Optional
from jose import jwt, JWTError
from passlib.context import CryptContext

# Configuração de hash de senha
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Chave secreta (em produção, use variável de ambiente)
SECRET_KEY = "123456789"
ALGORITHM = "HS256"
ACESSO_TOKEN_EXPIRA_MINUTOS = 30


def hash_senha(senha: str) -> str:
    return pwd_context.hash(senha)


def verificar_senha(senha: str, senha_hash: str) -> bool:
    return pwd_context.verify(senha, senha_hash)


def criar_access_token(dados: dict, expira_em: Optional[timedelta] = None) -> str:
    to_encode = dados.copy()

    if expira_em:
        expire = datetime.now(timezone.utc) + expira_em
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACESSO_TOKEN_EXPIRA_MINUTOS)

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verificar_token(token: str) -> Optional[dict]:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        usuario_id: str = payload.get("sub")
        if usuario_id is None:
            return None
        return {"usuario_id": int(usuario_id)}
    except JWTError:
        return None

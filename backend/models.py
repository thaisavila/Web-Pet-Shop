from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone

Base = declarative_base()


class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    senha_hash = Column(String(255), nullable=False)
    criado_em = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    pets = relationship("Pet", back_populates="tutor")

class Pet(Base):
    __tablename__ = "pets"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    especie = Column(String, nullable=False)
    raca = Column(String, nullable=True)
    idade = Column(Integer, nullable=True)
    peso = Column(Float, nullable=True)
    tutor_id = Column(Integer, ForeignKey("usuarios.id"), nullable=False)

    tutor = relationship("Usuario", back_populates="pets")

class Categoria(Base):
    __tablename__ = "categorias"
 
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descricao = Column(String(255))
    imagem_url = Column(String(255))
 
    servicos = relationship("Servico", back_populates="categoria")

class Servico(Base):
    __tablename__ = "servicos"
 
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descricao_curta = Column(String(255))
    descricao_completa = Column(Text)
    duracao_media = Column(String(50))          
    profissional = Column(String(100))
    cuidados = Column(Text)                     
    valor_estimado = Column(Float)
    imagem_url = Column(String(255))
    agendamentos = Column(Integer, default=0)  
    categoria_id = Column(Integer, ForeignKey("categorias.id"), nullable=False)
 
    categoria = relationship("Categoria", back_populates="servicos")
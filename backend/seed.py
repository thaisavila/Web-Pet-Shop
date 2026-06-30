"""
Rode UMA VEZ para popular o banco:
    python seed.py
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Categoria, Servico

DATABASE_URL = "sqlite:///./petshopDB.sqlite"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)

Base.metadata.create_all(bind=engine)
db = SessionLocal()

if db.query(Categoria).count() > 0:
    print("Banco já populado.")
    db.close()
    exit()

categorias_data = [
    {"nome": "Banho e Tosa",             "descricao": "Higiene e beleza para o seu pet"},
    {"nome": "Consultas Veterinárias",   "descricao": "Atendimento clínico especializado"},
    {"nome": "Vacinação",                "descricao": "Vacinas essenciais para a saúde do pet"},
    {"nome": "Exames",                   "descricao": "Diagnósticos laboratoriais e de imagem"},
    {"nome": "Hospedagem",               "descricao": "Estadia segura e confortável"},
    {"nome": "Adestramento",             "descricao": "Treinamento comportamental profissional"},
]

servicos_data = [
    # Banho e Tosa
    {"nome": "Banho Simples",         "descricao_curta": "Banho com shampoo e secagem",             "duracao_media": "1h",      "profissional": "Ana Paula",  "cuidados": "Informe alergias ao atendente",          "valor_estimado": 45.0,  "agendamentos": 312, "categoria_idx": 0},
    {"nome": "Banho + Tosa Higiênica","descricao_curta": "Banho e tosa das regiões íntimas",        "duracao_media": "1h30min", "profissional": "Ana Paula",  "cuidados": "Recomendado a cada 30 dias",             "valor_estimado": 65.0,  "agendamentos": 280, "categoria_idx": 0},
    {"nome": "Tosa Completa",         "descricao_curta": "Modelagem completa do pelo",              "duracao_media": "2h",      "profissional": "Carla",      "cuidados": "Traga foto do estilo desejado",          "valor_estimado": 90.0,  "agendamentos": 198, "categoria_idx": 0},
    {"nome": "Hidratação de Pelo",    "descricao_curta": "Tratamento para pelos ressecados",        "duracao_media": "1h45min", "profissional": "Ana Paula",  "cuidados": "Não molhe o pet por 24h após",           "valor_estimado": 75.0,  "agendamentos": 145, "categoria_idx": 0},
    {"nome": "Spa Pet",               "descricao_curta": "Pacote completo de bem-estar",            "duracao_media": "3h",      "profissional": "Equipe Spa", "cuidados": "Agendar com 48h de antecedência",        "valor_estimado": 150.0, "agendamentos": 89,  "categoria_idx": 0},

    # Consultas
    {"nome": "Consulta Clínica Geral",   "descricao_curta": "Avaliação completa do estado de saúde", "duracao_media": "30min", "profissional": "Dr. Marcos (CRMV 1234)",   "cuidados": "Leve a carteirinha de vacinação",     "valor_estimado": 120.0, "agendamentos": 420, "categoria_idx": 1},
    {"nome": "Consulta Dermatológica",   "descricao_curta": "Especialista em pele e pelo",           "duracao_media": "45min", "profissional": "Dra. Fernanda (CRMV 5678)", "cuidados": "Não aplique produtos na pele antes", "valor_estimado": 160.0, "agendamentos": 190, "categoria_idx": 1},
    {"nome": "Consulta Ortopédica",      "descricao_curta": "Avaliação de ossos e articulações",     "duracao_media": "45min", "profissional": "Dr. Roberto (CRMV 9012)",   "cuidados": "Traga exames anteriores se houver",  "valor_estimado": 170.0, "agendamentos": 130, "categoria_idx": 1},
    {"nome": "Consulta Oftalmológica",   "descricao_curta": "Saúde ocular do pet",                   "duracao_media": "40min", "profissional": "Dra. Juliana (CRMV 3456)",  "cuidados": "Não aplique colírios antes",         "valor_estimado": 155.0, "agendamentos": 110, "categoria_idx": 1},
    {"nome": "Retorno Médico",           "descricao_curta": "Acompanhamento pós-consulta",           "duracao_media": "20min", "profissional": "Mesmo veterinário",         "cuidados": "Traga os medicamentos em uso",       "valor_estimado": 0.0,   "agendamentos": 95,  "categoria_idx": 1},

    # Vacinação
    {"nome": "V8 / V10 (Polivalente)", "descricao_curta": "Proteção contra doenças caninas",   "duracao_media": "15min", "profissional": "Equipe de Vacinação", "cuidados": "Pet deve estar saudável no dia",          "valor_estimado": 85.0, "agendamentos": 540, "categoria_idx": 2},
    {"nome": "Antirrábica",            "descricao_curta": "Vacina obrigatória contra a raiva", "duracao_media": "15min", "profissional": "Equipe de Vacinação", "cuidados": "Exigida para viagens e hotéis",           "valor_estimado": 55.0, "agendamentos": 610, "categoria_idx": 2},
    {"nome": "Gripe Canina",           "descricao_curta": "Para cães em ambientes coletivos",  "duracao_media": "15min", "profissional": "Equipe de Vacinação", "cuidados": "Recomendado antes de hospedar",           "valor_estimado": 70.0, "agendamentos": 230, "categoria_idx": 2},
    {"nome": "Tríplice Felina",        "descricao_curta": "Vacina essencial para gatos",       "duracao_media": "15min", "profissional": "Equipe de Vacinação", "cuidados": "Gatos devem estar desverminados antes",   "valor_estimado": 80.0, "agendamentos": 310, "categoria_idx": 2},
    {"nome": "FeLV (Leucemia Felina)", "descricao_curta": "Proteção contra leucemia viral",    "duracao_media": "15min", "profissional": "Equipe de Vacinação", "cuidados": "Teste FeLV/FIV recomendado antes",        "valor_estimado": 90.0, "agendamentos": 175, "categoria_idx": 2},

    # Exames
    {"nome": "Hemograma Completo",       "descricao_curta": "Avaliação das células do sangue",      "duracao_media": "Resultado em 2h",  "profissional": "Lab. VetLab",               "cuidados": "Jejum de 4h recomendado",          "valor_estimado": 60.0,  "agendamentos": 380, "categoria_idx": 3},
    {"nome": "Ultrassonografia",         "descricao_curta": "Imagem dos órgãos abdominais",         "duracao_media": "30min",            "profissional": "Dr. Paulo (CRMV 7890)",     "cuidados": "Jejum de 8h e bexiga cheia",       "valor_estimado": 180.0, "agendamentos": 220, "categoria_idx": 3},
    {"nome": "Raio-X",                   "descricao_curta": "Avaliação óssea e torácica",           "duracao_media": "20min",            "profissional": "Equipe de Imagem",          "cuidados": "Pode exigir sedação leve",         "valor_estimado": 130.0, "agendamentos": 290, "categoria_idx": 3},
    {"nome": "Perfil Bioquímico",        "descricao_curta": "Avaliação renal, hepática e metabólica","duracao_media": "Resultado em 4h", "profissional": "Lab. VetLab",               "cuidados": "Jejum de 8h obrigatório",          "valor_estimado": 95.0,  "agendamentos": 340, "categoria_idx": 3},
    {"nome": "Eletrocardiograma (ECG)",  "descricao_curta": "Avaliação do ritmo cardíaco",          "duracao_media": "20min",            "profissional": "Dra. Camila (CRMV 2345)",   "cuidados": "Não requer preparo especial",      "valor_estimado": 110.0, "agendamentos": 140, "categoria_idx": 3},

    # Hospedagem
    {"nome": "Hospedagem — Cão Pequeno", "descricao_curta": "Estadia para cães até 10kg",     "duracao_media": "Diária",  "profissional": "Equipe de Hospedagem", "cuidados": "Vacinas obrigatórias em dia",          "valor_estimado": 70.0,  "agendamentos": 260, "categoria_idx": 4},
    {"nome": "Hospedagem — Cão Grande",  "descricao_curta": "Estadia para cães acima de 10kg","duracao_media": "Diária",  "profissional": "Equipe de Hospedagem", "cuidados": "V10 e antirrábica obrigatórias",       "valor_estimado": 100.0, "agendamentos": 185, "categoria_idx": 4},
    {"nome": "Hospedagem para Gatos",    "descricao_curta": "Ambiente exclusivo para felinos", "duracao_media": "Diária",  "profissional": "Equipe Felina",        "cuidados": "Tríplice felina obrigatória",          "valor_estimado": 65.0,  "agendamentos": 155, "categoria_idx": 4},
    {"nome": "Day Care",                 "descricao_curta": "Creche diurna com socialização",  "duracao_media": "8h",      "profissional": "Equipe Day Care",      "cuidados": "Pet castrado ou fêmea fora do cio",    "valor_estimado": 55.0,  "agendamentos": 310, "categoria_idx": 4},
    {"nome": "Hotel Pet Premium",        "descricao_curta": "Suíte VIP climatizada",           "duracao_media": "Diária",  "profissional": "Equipe Premium",       "cuidados": "Reserva com 72h de antecedência",      "valor_estimado": 140.0, "agendamentos": 95,  "categoria_idx": 4},

    # Adestramento
    {"nome": "Adestramento Básico",          "descricao_curta": "Comandos: sentar, ficar, vir",          "duracao_media": "8 sessões de 1h",      "profissional": "Patrícia Nunes", "cuidados": "Tutor deve participar das sessões",    "valor_estimado": 350.0, "agendamentos": 200, "categoria_idx": 5},
    {"nome": "Adestramento Avançado",        "descricao_curta": "Comandos complexos à distância",        "duracao_media": "10 sessões de 1h30min","profissional": "Bruno Correia",  "cuidados": "Pré-requisito: módulo básico concluído","valor_estimado": 500.0, "agendamentos": 110, "categoria_idx": 5},
    {"nome": "Correção Comportamental",      "descricao_curta": "Ansiedade, agressividade e fobias",     "duracao_media": "Variável",             "profissional": "Patrícia Nunes", "cuidados": "Avaliação gratuita na 1ª sessão",      "valor_estimado": 200.0, "agendamentos": 175, "categoria_idx": 5},
    {"nome": "Adestramento para Idosos",     "descricao_curta": "Reforço positivo para pets sênior",     "duracao_media": "6 sessões de 45min",   "profissional": "Patrícia Nunes", "cuidados": "Consulta veterinária prévia recomendada","valor_estimado": 280.0,"agendamentos": 80,  "categoria_idx": 5},
    {"nome": "Dog Walking com Adestrador",   "descricao_curta": "Passeio educativo com reforço de comandos","duracao_media": "1h",              "profissional": "Bruno Correia",  "cuidados": "Disponível de segunda a sábado",       "valor_estimado": 80.0,  "agendamentos": 240, "categoria_idx": 5},
]

categorias = []
for c in categorias_data:
    obj = Categoria(**c)
    db.add(obj)
    categorias.append(obj)

db.flush()

for s in servicos_data:
    idx = s.pop("categoria_idx")
    db.add(Servico(**s, categoria_id=categorias[idx].id))

db.commit()
db.close()

print(f"✅ Banco populado: {len(categorias_data)} categorias, {len(servicos_data)} serviços")
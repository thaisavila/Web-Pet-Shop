# 🐾 Pet Care
Sistema web para agendamento de serviços de pet shop, desenvolvido como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas.

## 📌 Sobre o Projeto
O Pet Care é uma aplicação web completa que permite o cadastro de usuários, registro de pets e agendamento de serviços como banho, tosa e outros cuidados para animais de estimação. O projeto foi desenvolvido com frontend em HTML, CSS e JavaScript puro e backend em Python com FastAPI, integrando uma API RESTful com autenticação JWT.

## Funcionalidades Principais

✅ Cadastro de usuários (tutores)

✅ Login 

✅ Registro de pets (nome, espécie, raça, idade, peso, telefone)

✅ Consulta de serviços disponíveis

✅ Agendamento de serviços (banho, tosa, etc.)

✅ Validação de campos e tratamento de erros

## 🛠️ Tecnologias Utilizadas
- Frontend
HTML - Estrutura das páginas
CSS - Estilização e layout responsivo
JavaScript - Lógica do cliente e integração com API via Fetch

Backend
Python 3
FastAPI - Framework web para construção da API RESTful
SQL - para banco de dados
Postman
Katalon Studio - Testes de API

## ▶️ Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/pet-care.git
   cd pet-care
   ```
   
### Backend
2. **Entre na pasta do backend:**
   ```bash
   cd backend
   ```

3. **Crie o ambiente virtual** (cada um deve criar na própria máquina):
   ```bash
   python -m venv .venv
   ```

4. **Ative o ambiente virtual:**
   
   **Windows:**
   ```bash
   .venv\Scripts\activate
   ```
   
   **Linux/Mac:**
   ```bash
   source .venv/bin/activate
   ```

5. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

6. **Popule o banco de dados:**
   ```bash
   python seed.py
   ```

7. **Suba o servidor:**
   ```bash
   python app.py
   ```

8. **Acesse a documentação Swagger:**
   - http://localhost:8000/docs

### Frontend

1. **Abra os arquivos HTML diretamente no navegador** ou use um servidor local:

   **Opção 1 - Abrir direto:**
   ```bash
   cd frontend
   # Abra o arquivo index.html no navegador
   ```

   **Opção 2 - Usar servidor HTTP simples (Python):**
   ```bash
   cd frontend
   python -m http.server 5500
   ```
   Acesse: **http://localhost:5500**

## 🧪 Testes

O projeto inclui testes automatizados desenvolvidos com Katalon Studio, cobrindo:

✅ Testes Funcionais (abertura de páginas, formulários, validações)

✅ Testes de aceitação para validar requisitos

✅ Casos de sucesso e cenários de erro

Os testes estão em um repositório separado: https://github.com/thaisavila/Tests-Katalon-Studio

👩‍💻 Autores

Thais Ávila

Graziele Sousa

Matheus Santana


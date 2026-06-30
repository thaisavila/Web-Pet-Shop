backend:
1 - cria o ambiente virtual (cada um tem q ter na própria máquina
python -m venv .venv

2 - ativa ele: .venv\Scripts\activate

3 - instala as dependências: pip install -r requirements.txt

4 - Populem o banco (só na primeira vez):
python seed.py

5 - Subam o servidor:
python app.py

depois acessa http://localhost:8000/docs para ver os endpoints funcionando

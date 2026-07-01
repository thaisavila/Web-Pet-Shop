backend:

1 - cria o ambiente virtual (cada um tem que ter na própria máquina
python -m venv .venv

2 - ativa ele: .venv\Scripts\activate

3 - instala as dependências: pip install -r requirements.txt

4 - app.py e seed.py está na subpasta backend, então antes de inserir, certifique-se
de que você está na subpasta, caso não esteja, utilize cd backend.

5 - Populem o banco (só na primeira vez):
python seed.py

6 - Subam o servidor:
python app.py

depois acessa http://localhost:8000/docs para ver os endpoints funcionando

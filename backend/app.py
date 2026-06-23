from flask import Flask, render_template
import sqlite3
import re

app = Flask(__name__)
app.secret_key = '12345'

def conectar_db():
    conectar = sqlite3.connect('database/petshopDB.sqlite')
    return conectar

def criando_tabela():
    conectar = conectar_db()
    cursor = conectar.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS clientes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
    )
    ''')
    conectar.commit()
    conectar.close()

@app.route('/')
def index():
    return render_template('index.html')
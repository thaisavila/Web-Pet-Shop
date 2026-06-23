import sqlite3

conn = sqlite3.connect('database/petshopDB.sqlite')
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT
)
""")
conn.commit()
print(cursor.fetchall())
conn.close()
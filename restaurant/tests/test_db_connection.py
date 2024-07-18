import os
from dotenv import load_dotenv
import psycopg2

load_dotenv()

db_name = os.getenv('DB_NAME')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')

db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')
db_ssl = os.getenv('DB_SSL')

try:
    conn = psycopg2.connect(
        dbname=db_name,
        user=db_user,
        password=db_password,
        host=db_host,
        port=db_port,
        sslmode=db_ssl,
    )

    print("Connected to the database successfully.")

except Exception as e:
    print("Connection error:", e)
finally:
    if conn:
        conn.close()
        print("Connection closed.")
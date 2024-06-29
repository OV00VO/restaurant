import os
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.environ.get('DB_HOST')
DB_NAME = os.environ.get('DB_NAME')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')

SECRET_KEY = os.environ.get('SECRET_KEY')

ALLOWED_HOSTS = ('*')

CLOUDINARY_NAME = os.environ.get('CLOUDINARY_NAME')
API_KEY = os.environ.get('API_KEY')
API_SECRET = os.environ.get('API_SECRET')
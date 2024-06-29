# Reference in modified parts below: Code Institute Curriculum and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is based on the above references and modifed for the project

import os
# from dotenv import load_dotenv
import dj_database_url
from pathlib import Path
import cloudinary
import cloudinary.uploader
import cloudinary.api
import secrets

# load_dotenv()

from config import DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, SECRET_KEY, ALLOWED_HOSTS

DEBUG = True

BASE_DIR = Path(__file__).resolve().parent.parent

DB_HOST = os.environ.get('DB_HOST')

SECRET_KEY = os.environ.get('SECRET_KEY')

DATABASES = {
    'default': {
        'ENGINE': 'mouse.db.elephantsql.com',
        'HOST': DB_HOST,
        'NAME': DB_NAME,
        'USER': DB_USER,
        'PASSWORD': DB_PASSWORD,
    }
}
ALLOWED_HOSTS = ALLOWED_HOSTS

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.messages',
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.staticfiles',
    'bookatable',
    'pytest',
]

SITE_ID = 1
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

CLOUDINARY_NAME = os.environ.get('CLOUDINARY_NAME')
API_KEY = os.environ.get('API_KEY')
API_SECRET = os.environ.get('API_SECRET')

cloudinary.config(
    cloud_name=CLOUDINARY_NAME,
    api_key=API_KEY,
    api_secret=API_SECRET,
    secure=True
)


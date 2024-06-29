# Reference in modified parts below: Code Institute Curriculum and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is based on the above references and modifed for the project

import os
import dj_database_url
from pathlib import Path
import cloudinary
import cloudinary.uploader
import cloudinary.api
import secrets
from dotenv import load_dotenv

load_dotenv()

from config import DB_HOST, SECRET_KEY, CLOUDINARY_NAME, API_KEY, API_SECRET, ALLOWED_HOSTS

DEBUG = True

BASE_DIR = Path(__file__).resolve().parent.parent

DB_HOST = os.environ.get('DB_HOST')
SECRET_KEY = os.environ.get('SECRET_KEY')

DATABASES = {'default': dj_database_url.config(conn_max_age=600,
                                              user=DB_USER,
                                              password=DB_PASSWORD,
                                              host=DB_HOST,
                                              dbname=DB_NAME)}

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

cloudinary.config(
    cloud_name=CLOUDINARY_NAME,
    api_key=API_KEY,
    api_secret=API_SECRET,
    secure=True
)

# Reference in modified parts: Code Institute Curriculum and Code Star Project
# Reference in modified parts: https://github.com/flatplanet/Django-CRM
# Reference, modified: https://www.pythonpool.com/python-unittest-vs-pytest/
# Notes: Below code is based on the above references, modifed for the project

"""
WSGI config for restaurant project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'restaurant.settings')

application = get_wsgi_application()

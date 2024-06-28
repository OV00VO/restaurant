# Reference in modified parts: Code Institute Curriculum and Code Star Project
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is based on the above references, modifed for the project

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [

    path('admin/', admin.site.urls),

    path('account/', include('allauth.urls')),

    path('', include('bookatable.urls')),

    path('', TemplateView.as_view(template_name='index.html'), name='home'),
]

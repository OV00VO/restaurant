# Reference in modified parts: Code Institute Curriculum and Code Star Project
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is based on the above references, modifed for the project

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from bookatable.views import ReservationListView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('allauth.urls')),
    
    path('my_reservations/', ReservationListView.as_view(), name='my_reservations'),
    
    path('bookatable/', include('bookatable.urls')),

    path('create_reservation/agreed_to_terms/', TemplateView.as_view(template_name='agreed_to_terms.html'), name='agreed_to_terms'),
    
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),    
    
    path('', TemplateView.as_view(template_name='404.html'), name='not_found'),
]

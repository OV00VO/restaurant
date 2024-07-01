# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [

    path('', views.home, name='home'),
    
    path('menu/', views.menu, name='menu'),
    
    path('about/', views.about, name='about'),
    
    path('contact/', views.contact, name='contact'),
    
    path('signup/', views.signup, name='signup'),
    
    path('login/', views.login, name='login'),

    path('logout/', views.logout, name='logout'),
    
    path('reservation_form/', views.reservation_form, name='reservation_form'),
    
    path('create_reservation/', views.create_reservation, name='create_reservation'),
    path('read_reservation', views.read_reservation, name='read_reservation'),
    path('update_reservation', views.update_reservation, name='update_reservation'),
    path('delete_reservation', views.delete_reservation, name='delete_reservation'),
    
    path('my_reservations', views.my_reservations, name='my_reservations'),
    
    path('robots.txt', views.home, name='home'),
    
    path('__debug__/', include('debug_toolbar.urls')),
    
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
]
# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

from django.urls import path, include
from . import views_org
from django.contrib.auth import views as auth_views

urlpatterns = [

    path('', views_org.home, name='home'),
    
    path('menu/', views_org.menu, name='menu'),
    
    path('about/', views_org.about, name='about'),
    
    path('contact/', views_org.contact, name='contact'),
    
    path('signup/', views_org.signup, name='signup'),
    
    path('login/', views_org.login, name='login'),

    path('logout/', views_org.logout, name='logout'),
    
    path('reservation_form/', views_org.reservation_form, name='reservation_form'),
    
    path('create_reservation/<int:reservation_id>/', views_org.create_reservation, name='create_reservation'),
    path('read_reservation/<int:reservation_id>/', views_org.read_reservation, name='read_reservation'),
    path('update_reservation/<int:reservation_id>/', views_org.update_reservation, name='update_reservation'),
    path('delete_reservation/<int:reservation_id>/', views_org.delete_reservation, name='delete_reservation'),
    
    path('my_reservations', views_org.my_reservations, name='my_reservations'),
    
    path('create_booking', views_org.create_booking, name='create_booking'),
    path('create_reservation', views_org.create_booking, name='create_reservation'),
    
    path('robots.txt', views_org.home, name='home'),
    
    path('__debug__/', include('debug_toolbar.urls')),
    
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
]
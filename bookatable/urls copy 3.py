# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

from django.urls import path, include
from . import views_org
from django.contrib.auth import views as auth_views

from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [

    path('', views.home, name='home'),
    path('menu/', views.menu, name='menu'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', views.logout, name='logout'),
    
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
    path('reservations/', views.list_reservation, name='reservation_list'),
    path('create_reservation/', views.create_reservation, 
         name='create_reservation'),
    path('view/<int:reservation_id>/', views.view_reservation, 
         name='view_reservation'),
    path('update/<int:reservation_id>/', views.update_reservation, 
         name='update_reservation'),
    path('delete/<int:reservation_id>/', views.delete_reservation, 
         name='delete_reservation'),
    path('reservation/success/', views.reservation_success, 
         name='reservation_success'),
    path('my_reservations/', views.my_reservations, name='my_reservations'),

    path('update_user_info/', views.update_user_info, name='update_user_info'),
    path('reservation_form/', views.reservation_form, name='reservation_form'),
    path('terms/', views.agreed_to_terms, name='agreed_to_terms'),
    
    path('test_crud/', views.test_crud, name='test_crud'),
    
    path('default_request/', views.default_request, name='default_request'), 
]
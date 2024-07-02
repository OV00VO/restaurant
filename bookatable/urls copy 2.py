# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

from django.urls import path
from . import views_org
from django.contrib.auth import views as auth_views

urlpatterns = [

    path('', views_org.home, name='home'),
    path('menu/', views_org.menu, name='menu'),
    path('about/', views_org.about, name='about'),
    path('contact/', views_org.contact, name='contact'),
    
    path('signup/', views_org.signup, name='signup'),
    path('login/', views_org.login, name='login'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', views_org.logout, name='logout'),
    
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
    path('reservations/', views_org.list_reservation, name='reservation_list'),
    path('create_reservation/', views_org.create_reservation, 
         name='create_reservation'),
    path('view/<int:reservation_id>/', views_org.view_reservation, 
         name='view_reservation'),
    path('update/<int:reservation_id>/', views_org.update_reservation, 
         name='update_reservation'),
    path('delete/<int:reservation_id>/', views_org.delete_reservation, 
         name='delete_reservation'),
    path('reservation/success/', views_org.reservation_success, 
         name='reservation_success'),
    path('my_reservations/', views_org.my_reservations, name='my_reservations'),

    path('update_user_info/', views_org.update_user_info, name='update_user_info'),
    path('reservation_form/', views_org.reservation_form, name='reservation_form'),
    path('terms/', views_org.agreed_to_terms, name='agreed_to_terms'),
    
    path('test_crud/', views_org.test_crud, name='test_crud'),
    
    path('default_request/', views_org.default_request, name='default_request'), 
]
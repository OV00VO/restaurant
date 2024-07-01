# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from .views import (
    ReservationListView, ReservationDetailView, ReservationCreateView, ReservationUpdateView
)
from django.views import View

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

    path('create_reservation/<int:reservation_id>/', views.create_reservation, name='create_reservation'),
    path('read/<int:read_id>/', views.view_reservation, name='read_reservation'),
    path('update/<int:update_id>/', views.update_reservation, name='update_reservation'),
    path('delete/<int:delete_id>/', views.delete_reservation, name='delete_reservation'),

    path('my_reservations/', views.my_reservations, name='my_reservations'),
]
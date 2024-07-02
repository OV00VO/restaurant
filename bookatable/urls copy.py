# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

from django.urls import path
from . import views_org
from django.contrib.auth import views as auth_views
from .views_org import (
    ReservationListView, ReservationDetailView, ReservationCreateView, ReservationUpdateView
)
from django.views import View

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

    path('create_reservation/<int:reservation_id>/', views_org.create_reservation, name='create_reservation'),
    path('read/<int:read_id>/', views_org.view_reservation, name='read_reservation'),
    path('update/<int:update_id>/', views_org.update_reservation, name='update_reservation'),
    path('delete/<int:delete_id>/', views_org.delete_reservation, name='delete_reservation'),

    path('my_reservations/', views_org.my_reservations, name='my_reservations'),
]
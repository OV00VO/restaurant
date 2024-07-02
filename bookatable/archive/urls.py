# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

from django.urls import path, include
from ...restaurant.templates import views
from django.contrib.auth import views as auth_views
from .views import create_reservation, create_booking, read_reservation, view_reservation, update_reservation, delete_reservation 

urlpatterns = [
    path('', views.home, name='home'),
    path('menu/', views.menu, name='menu'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('robots.txt', views.home, name='home'),

    path('signup/', views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', views.logout, name='logout'),

    path('reservations/<int:reservation_id>', views.list_reservation, name='reservation_list'),
    path('create_reservation/<int:reservation_id>', views.create_reservation, name='create_reservation'),
    path('view/<int:reservation_id>/', views.view_reservation, name='view_reservation'),
    path('update/<int:reservation_id>/', views.update_reservation, name='update_reservation'),
    path('delete/<int:reservation_id>/', views.delete_reservation, name='delete_reservation'),
    path('reservation/success/', views.reservation_success, name='reservation_success'),
    path('my_reservations/', views.my_reservations, name='my_reservations'),

    path('update_user_info/<int:reservation_id>', views.update_user_info, name='update_user_info'),
    path('reservation_form', views.reservation_form, name='reservation_form'),
    path('terms/', views.agreed_to_terms, name='agreed_to_terms'),

    path('__debug__/', include('debug_toolbar.urls')),
    path('test_crud/', views.test_crud, name='test_crud'),
    path('default_request/', views.default_request, name='default_request'),
]

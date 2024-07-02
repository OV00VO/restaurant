# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Reservation, User
from django.conf import settings


def home(request):
    return render(request, 'home.html')


def about(request):
    return render(request, 'about.html')


def menu(request):
    return render(request, 'menu.html')


def contact(request):
    return render(request, 'contact.html')


def login(request):
    return render(request, 'login.html')


def signup(request):
    return render(request, 'signup.html')


def logout(request):
    return render(request, 'logout.html')


def list_reservation(request):
    return render(request, 'list_reservation.html')


def read_reservation(request):
    return render(request, 'read_reservation.html')


def view_reservation(request):
    return render(request, 'view_reservation.html')


def create_booking(request):
    return render(request, 'create_booking.html')


def delete_booking(request):
    return render(request, 'delete_booking.html')


def reservation_success(request):
    return render(request, 'reservation_success.html')


def reservation_form(request):
    return render(request, 'reservation_form.html')


def test_crud(request):
    return render(request, 'test_crud.html')

    
def login_required_message(request):
    context = {}
    if not request.user.is_authenticated:
        context['login_message'] = "Please login to make a reservation"
    return context   


def default_request(request):
        return render(request, 'default_request.html')
    
    
def reservation_form(request):
        return render(request, 'reservation_form.html')
    
         
# def my_reservations(request):
#     if not request.user.is_authenticated:
#         return login_required_message(request)
#     reservations = Reservation.objects.filter(user=request.user)
#     context = {'reservations': reservations}
#     return render(request, 'my_reservations.html', context)

def my_reservations(request):
     if request.method == 'POST':
         user = request.user
         user.profile.name = request.POST['name']
         user.profile.save()
         messages.success(request, 'User information updated successfully!')
         return redirect('my_reservations')
 
     reservations = Reservation.objects.filter(user=request.user)
     context = {'reservations': reservations}
     return render(request, 'my_reservations.html', context)

def agreed_to_terms(request):
    return render(request, 'agreed_to_terms.html')
 
    
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM   
   
# @login_required
# def my_reservations(request):
#     if request.method == 'POST':
#         user = request.user
#         user.profile.name = request.POST['name']
#         user.profile.save()
#         messages.success(request, 'User information updated successfully!')
#         return redirect('my_reservations')
# 
#     reservations = Reservation.objects.filter(user=request.user)
#     context = {'reservations': reservations}
#     return render(request, 'my_reservations.html', context)


@login_required
def create_reservation(request):
    if request.method == 'POST':
        try:
            date = request.POST['date']
            time = request.POST['time']
            number_of_guests = request.POST['number_of_guests']
            occasion = request.POST['occasion']
            
            reservation = Reservation.objects.create(user=request.user, 
                                                     date=date, time=time, 
                           number_of_guests=number_of_guests, occasion=occasion)
            messages.success(request, 'Reservation created successfully!')
            return redirect('my_reservations')
        except Exception as e:
            messages.error(request, f'Error creating reservation: {e}')

    return render(request, 'create_reservation.html')


@login_required
def view_reservation(request, reservation_id):
    try:
        reservation = Reservation.objects.get(pk=reservation_id, 
                                              user=request.user)
        context = {'reservation': reservation}
        return render(request, 'view_reservation.html', context)
    except Reservation.DoesNotExist:
        messages.error(request, 'Reservation not found!')
        return redirect('my_reservations')


@login_required
def update_reservation(request, reservation_id):
    try:
        reservation = Reservation.objects.get(pk=reservation_id, 
                                              user=request.user)
        if request.method == 'POST':
            try:
                reservation.date = request.POST['date']
                reservation.time = request.POST['time']
                reservation.save()
                messages.success(request, 'Reservation updated successfully!')
                return redirect('my_reservations')
            except Exception as e:
                messages.error(request, f'Error updating reservation: {e}')

        context = {'reservation': reservation}
        return render(request, 'update_reservation.html', context)
    except Reservation.DoesNotExist:
        messages.error(request, 'Reservation not found!')
        return redirect('my_reservations')


@login_required
def delete_reservation(request, reservation_id):
    try:
        reservation = Reservation.objects.get(pk=reservation_id, 
                                              user=request.user)
        reservation.delete()
        messages.success(request, 'Reservation deleted successfully!')
        return redirect('my_reservations')
    except Reservation.DoesNotExist:
        messages.error(request, 'Reservation not found!')
        return redirect('my_reservations')


@login_required
def update_user_info(request):
    if request.method == 'POST':
        user = request.user
        user.profile.name = request.POST['name']
        user.profile.save()
        messages.success(request, 'User information updated successfully!')
        return redirect('my_reservations')

    return render(request, 'my_reservations.html')

def your_view(request):
    image_url = settings.STATIC_URL + 'restaurant/static/img/hero1.webp'
    context = {'image_url': image_url}
    return render(request, 'restaurant/menu.html', context)
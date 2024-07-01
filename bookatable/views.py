# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Reservation, User, Booking
from django.conf import settings

def create_reservation(request):
    if request.method == 'POST':
        date = request.POST.get('date')
        time = request.POST.get('time')
        number_of_guests = request.POST.get('number_of_guests')
        occasion = request.POST.get('occasion')
        agreed_to_terms = request.POST.get('agreed_to_terms', False)

        if agreed_to_terms:
            booking = Reservation.objects.create(
                user=request.user,
                date=date,
                time=time,
                number_of_guests=number_of_guests,
                occasion=occasion,
                agreed_to_terms=agreed_to_terms,
            )
            return render(request, 'reservation_confirmation.html', {'booking': Booking})
        else:
            return render(request, 'my_reservations.html', {'error_message': 'Please agree to the terms and conditions.'})

    return redirect('my_reservations')

def read_reservation(request):
    context = {}
    return render(request, 'read_reservation.html') 

def update_reservation(request):
    context = {}
    return render(request, 'update_reservation.html') 

def delete_reservation(request):
    context = {}
    return render(request, 'delete_reservation.html') 

def my_reservations(request):
    context = {}
    return render(request, 'my_reservations.html')

def home(request):
    context = {}
    return render(request, 'home.html') 

def about(request):
    return render(request, 'about.html')


def menu(request):
    return render(request, 'menu.html')


def contact(request):
    return render(request, 'contact.html')


def reservation_form(request):
    return render(request, 'reservation_form.html')

def agreed_to_terms(request):
    return render(request, 'agreed_to_terms.html')

def signup(request):
    return render(request, 'signup.html')

def login(request):
    return render(request, 'login.html')

# Reference in modified parts below: https://github.com/flatplanet/Django-CRM      
def logout(request):
    return render(request, 'logout.html')



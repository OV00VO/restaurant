# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.


from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Reservation, User
from django import forms
from bookatable.forms import ReservationModelForm
from .forms import ReservationModelForm
from django.conf import settings
from .forms import CreateReservationForm


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


def reservation_success(request):
    return render(request, 'reservation_success.html')


def test_crud(request):
    return render(request, 'test_crud.html')
   
 
def login_required_message(request):
    context = {}
    if not request.user.is_authenticated:
        context['login_message'] = "Please login to make a reservation"
    return context   


def default_request(request):
        return render(request, 'default_request.html')
    
    
def ReservationForm(request):
        return redirect(request, 'reservation_form.html')
    
        
def my_reservations(request):
    if not request.user.is_authenticated:
        return redirect('my_reservations')
 
    
def agreed_to_terms(request):
    return render(request, 'agreed_to_terms.html')

 
class ReservationModelForm(forms.ModelForm):
    user = forms.CharField(required=True)
    name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    phone_number = forms.CharField(required=True)
    date = forms.DateField(required=True)
    time = forms.TimeField(required=True)
    number_of_guests = forms.IntegerField(required=True)
    occasion = forms.CharField(required=True)
    agreed_to_terms = forms.BooleanField(required=True)
 
    
def confirmation_view(request, pk):
    reservation = Reservation.objects.get(pk=pk)
    context = {'reservation': reservation}
    return render(request, 'reservation_confirmation.html', context)
    
    
    
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM      
@login_required
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


@login_required
def create_reservation(request):
  if request.method == 'POST':
    form = CreateReservationForm(request.POST)
    if form.is_valid():
      
      date = form.cleaned_data['date']
      time = form.cleaned_data['time']
      number_of_guests = form.cleaned_data['number_of_guests']
      occasion = form.cleaned_data['occasion']
      agreed_to_terms = form.cleaned_data['agreed_to_terms']

      reservation = Reservation.objects.create(
          user=request.user,
          date=date,
          time=time,
          number_of_guests=number_of_guests,
          occasion=occasion,
          agreed_to_terms=agreed_to_terms
      )

      return redirect('success_view')
  else:
    form = CreateReservationForm()

  context = {'form': form}
  return render(request, 'create_reservation.html', context)

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
# Reference in modified parts below: Code Institute and Code Star Project
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.

import os
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.messages import success, error
from .models import Reservation, User
from django import forms
from bookatable.forms import ReservationModelForm
from .forms import ReservationModelForm
from django.conf import settings
from .forms import CreateReservationForm, UpdateReservationForm, RequestForm


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


def reservation_success(request):
    return render(request, 'reservation_success.html')


def test_crud(request):
    return render(request, 'test_crud.html')


def login_required_message(request):
    context = {}
    if not request.user.is_authenticated:
        context['login_message'] = "Please login to make a reservation"
    return context


def my_reservations(request):
    if not request.user.is_authenticated:
        return redirect('my_reservations')


def agreed_to_terms(request):
    return render(request, 'agreed_to_terms.html')


def success_view(request, reservation_id):
    reservation = get_object_or_404(Reservation, pk=reservation_id)
    context = {
        'reservation': reservation
    }
    return render(request, 'success.html', context)


def error(request):
    error(request, 'Your reservation not has been successfully updated!')
    return render(request, 'error.html')


def confirmation_view(request, pk):
    reservation = Reservation.objects.get(pk=pk)
    context = {'reservation': reservation}
    return render(request, 'reservation_confirmation.html', context)


def request_form(request):
    if request.method == 'POST':
        form = RequestForm(request.POST)
        if form.is_valid():
            pass
    else:
        form = RequestForm()

    return render(request, 'request_form.html', {'form': form})


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
        form = UpdateReservationForm(request.POST)
        if form.is_valid():
            reservation = form.save(commit=False)
            reservation.user = request.user
            reservation.save()
            messages.success(request, 'Reservation created successfully!')
            return redirect('success_view', reservation_id=reservation.pk)
    else:
        form = UpdateReservationForm()

    return render(request, 'create_reservation.html', {'form': form})


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
        reservation = get_object_or_404(Reservation,
                                        pk=reservation_id, user=request.user)
    except Reservation.DoesNotExist:
        messages.error(request, 'Reservation not found!')
        return redirect('my_reservations')

    if request.method == 'POST':
        form = UpdateReservationForm(request.POST, instance=reservation)
        if form.is_valid():
            form.save()
            messages.success(request, 'Reservation updated successfully!')
            return redirect('success_view', reservation_id=reservation.pk)
        else:
            messages.error(request, 'Please correct the errors in the form.')
    else:
        form = UpdateReservationForm(instance=reservation)

    context = {'form': form, 'reservation': reservation}
    return render(request, 'update_reservation.html', context)


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

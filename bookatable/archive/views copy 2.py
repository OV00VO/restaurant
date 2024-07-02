# Reference in modified parts below: Code Institute and Code Star Project   
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is modified and based on the above references.


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .models import Reservation, User
from django.conf import settings
from django.urls import reverse_lazy
from django.views import View

class ReservationListView:

    def get(self, request):
        reservations = Reservation.objects.all()
        context = {'reservations': reservations}
        return render(request, 'my_reservations.html', context)


class ReservationDetailView:

    def get(self, request, pk):
        reservation = Reservation.objects.get(pk=pk)
        context = {'reservation': reservation}
        return render(request, 'reservation_detail.html', context)
    
class ReservationCreateView:
    model = Reservation
    fields = ['name', 'email', 'phone_number', 'date', 'time', 'number_of_guests']
    template_name = 'reservation_form.html'
    success_url = reverse_lazy('reservation_list')
    
    def form_valid(self, form):
        return super().form_valid(form)
    
class ReservationUpdateView:
    model = Reservation
    fields = ['name', 'email', 'phone_number', 'date', 'time', 'number_of_guests']
    template_name = 'reservation_update_form.html'
    success_url = reverse_lazy('reservation_list')

    def form_valid(self, form):
        return super().form_valid(form)
   
@login_required
def my_reservations(request):
    if request.method == 'POST':

        messages.success(request, 'User information updated successfully!')
        return redirect('my_reservations')

    reservations = Reservation.objects.filter(user=request.user)
    context = {'reservations': reservations}
    return render(request, 'my_reservations.html', context)


@login_required
def create_reservation(request):
    if request.method == 'POST':
        try:
            date = request.POST['date']
            time = request.POST['time']
            number_of_guests = int(request.POST['number_of_guests'])
            occasion = request.POST['occasion']

            reservation = Reservation.objects.create(
                user=request.user,
                date=date,
                time=time,
                number_of_guests=number_of_guests,
                occasion=occasion,
            )
            messages.success(request, 'Reservation created successfully!')
            return redirect('my_reservations')
        except (ValueError, Exception) as e:
            messages.error(request, f'Error creating reservation: {e}')

    return render(request, 'create_reservation.html')

# ... other reservation views (view_reservation, update_reservation, delete_reservation)

@login_required
def update_user_info(request):
    if request.method == 'POST':
        # Update user information logic (if applicable based on your model)
        # ...

        messages.success(request, 'User information updated successfully!')
        return redirect('update_user_info_form')  # Redirect to a dedicated form view (if applicable)

    # Consider rendering a form or user information display on GET requests
    return render(request, 'my_reservations.html')  # This might need adjustment

def your_view(request):
    image_url = settings.STATIC_URL + 'restaurant/static/img/hero1.webp'
    context = {'image_url': image_url}
    return render(request, 'restaurant/menu.html', context)

# Login view
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a specific page after successful login (optional)
            return redirect('home')
        else:
            messages.error(request, 'Invalid username or password!')
    return render(request, 'login.html')

# Logout view
def logout_view(request):
    logout(request)
    messages.success(request, 'You have been logged out successfully!')
    return redirect('home')

# Signup view (implement based on your chosen authentication method)
# Consider using Django's built-in User creation form or third-party libraries like allauth
from django.contrib.auth.forms import UserCreationForm

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Log in the newly created user
            messages.success(request, 'You have been registered successfully!')
            return redirect('home')  # Redirect to homepage after signup
        else:
            messages.error(request, 'Error creating user. Please fix the errors below.')
    else:
        form = UserCreationForm()
    context = {'form': form}
    return render(request, 'signup.html', context)

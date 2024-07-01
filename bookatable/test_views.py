from django.http import request  # Assuming you're using request object
from django.shortcuts import render

class ReservationListView:

    def get(self, request):
        reservations = ["Reservation 1", "Reservation 2"]
        context = {'reservations': reservations}
        return render(request, 'reservations.html', context)
    
from django.urls import path
urlpatterns = [
    path('test_reservations/', ReservationListView.as_view(), name='test_reservations'),
]

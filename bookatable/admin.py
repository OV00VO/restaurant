# Reference in modified parts: Code Institute Curriculum and Code Star Project
# Reference in modified parts: https://github.com/flatplanet/Django-CRM

from django.contrib import admin
from .models import Reservation, Booking

admin.site.register(Reservation)
admin.site.register(Booking)

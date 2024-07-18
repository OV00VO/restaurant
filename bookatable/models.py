# Reference in modified parts: Code Institute Curriculum and Code Star Project
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is based on the references and modifed for the project

from django.db import models
from django.forms import ModelForm
from django.contrib.auth.models import User
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM


class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    number_of_guests = models.PositiveIntegerField()
    occasion = models.CharField(max_length=255)
    agreed_to_terms = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.date} at {self.time}"


class Booking(models.Model):
    guest = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    number_of_guests = models.PositiveIntegerField()
    occasion = models.CharField(max_length=255)
    agreed_to_terms = models.BooleanField(default=False)

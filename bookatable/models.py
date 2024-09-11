# Reference in modified parts: Code Institute Curriculum and Code Star Project
# Reference in modified parts below: https://github.com/flatplanet/Django-CRM
# Notes: Below code is based on the references and modifed for the project

from django.db import models
from django.forms import ModelForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import re
from django.core.validators import validate_email, RegexValidator
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

    def clean(self):
        super().clean()
        
        if not re.match(r'^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$', self.name):
            raise ValidationError({'name': 'Name must be at least two words, each with at least 2 letters.'})

        if not re.match(r'^\+?\d{10,15}$', self.phone_number):
            raise ValidationError({'phone_number': 'Phone number must be between 10 and 15 digits long, with optional "+" at the beginning.'})

        if self.number_of_guests < 1:
            raise ValidationError({'number_of_guests': 'Number of guests must be at least 1.'})

        if len(self.occasion.strip()) < 3:
            raise ValidationError({'occasion': 'Occasion must be at least 3 characters long.'})

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)


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

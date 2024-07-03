# Reference, modified parts: Code Institute Curriculum and Code Star Project
# Reference: modified parts: https://github.com/flatplanet/Django-CRM
# Notes: Below code is based on above references and modifed for the project

from django import forms
from bookatable.models import Reservation

class ReservationModelForm(forms.ModelForm):
  class Meta:
    model = Reservation
    fields = ['user', 'name', 'email', 'phone_number', 'date', 'time', 
              'number_of_guests', 'occasion', 'agreed_to_terms']
    
class CreateReservationForm(forms.ModelForm):
  class Meta:
    model = Reservation
    fields = ['name', 'email', 'phone_number', 'date', 'time', 
              'number_of_guests', 'occasion', 'agreed_to_terms']
    widgets = {
            'date': forms.DateInput(attrs={'class': 'form-control datepicker', 'autocomplete': 'off'}),
            'time': forms.TimeInput(attrs={'class': 'form-control', 'type': 'time'}),      
}
  
  
class UpdateReservationForm(forms.ModelForm):
  class Meta:
    model = Reservation
    fields = ['name', 'email', 'phone_number', 'date', 'time', 
              'number_of_guests', 'occasion', 'agreed_to_terms']   
    
    widgets = {
            'date': forms.DateInput(attrs={'class': 'form-control datepicker', 'autocomplete': 'off'}),
            'time': forms.TimeInput(attrs={'class': 'form-control', 'type': 'time'}),      
}
  
    
class ReadReservationForm(forms.ModelForm):
  class Meta:
    model = Reservation
    fields = ['user', 'name', 'email', 'phone_number', 'date', 'time', 
              'number_of_guests', 'occasion', 'agreed_to_terms']


class ReservationForm(forms.Form):
    contactName = forms.CharField(label='Name', max_length=100)
    contactPhone = forms.CharField(label='Phone Number', max_length=20)
    reservationDate = forms.DateField(label='Date')
    reservationTime = forms.TimeField(label='Time')
    numGuests = forms.IntegerField(label='Number of Guests', min_value=1, max_value=100)
    occasion = forms.CharField(label='Occasion', max_length=100, required=False)

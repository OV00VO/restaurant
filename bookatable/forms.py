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
            'date': forms.DateInput(attrs={'class': 'form-control', 'type':
                                                    'date', 'id': 'id_date'}),
            'time': forms.TimeInput(attrs={'class': 'form-control', 'type':
                                           'time', 'id': 'id_time'}), }


class UpdateReservationForm(forms.ModelForm):
    class Meta:
        model = Reservation
        fields = ['name', 'email', 'phone_number', 'date', 'time',
                  'number_of_guests', 'occasion', 'agreed_to_terms']

        widgets = {
            'date': forms.DateInput(attrs={'class': 'form-control', 'type':
                                           'date', 'id': 'id_date'}),
            'time': forms.TimeInput(attrs={'class': 'form-control', 'type':
                                           'time', 'id': 'id_time'}), }


class ReadReservationForm(forms.ModelForm):
    class Meta:
        model = Reservation
        fields = ['user', 'name', 'email', 'phone_number', 'date', 'time',
                  'number_of_guests', 'occasion', 'agreed_to_terms']


class RequestForm(forms.Form):
    contact_name = forms.CharField(
        label='Name', max_length=100,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':
                                      'Enter Your Name'})
    )
    contact_phone = forms.CharField(
        label='Phone Number', max_length=15,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':
                                      'Enter Your Phone Number'})
    )
    reservation_date = forms.DateField(
        label='Date',
        widget=forms.DateInput(attrs={'class': 'form-control', 'type': 'date'})
    )
    reservation_time = forms.TimeField(
        label='Time',
        widget=forms.TimeInput(attrs={'class': 'form-control', 'type': 'time'})
    )
    num_guests = forms.IntegerField(
        label='Number of Guests', min_value=1, max_value=100,
        widget=forms.NumberInput(attrs={'class': 'form-control'})
    )
    occasion = forms.CharField(
        label='Occasion', required=False,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':
                                      'Enter Occasion'})
    )
    predefined_occasion = forms.ChoiceField(
        label='Event', required=False, choices=[
            ('', 'Event'),
            ('birthday', 'Birthday Celebration'),
            ('anniversary', 'Anniversary Dinner'),
            ('business', 'Business Meeting'),
            ('other', 'Not Specified'),
        ],
        widget=forms.Select(attrs={'class': 'form-control'})
    )

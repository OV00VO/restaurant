# Reference, modified: Code Institute Curriculum and Code Star Project
# Reference, modified: https://github.com/flatplanet/Django-CRM
# Reference, modified: https://www.pythonpool.com/python-unittest-vs-pytest/
# Notes: Below code is based on the above references, modifed for the project

from django.contrib.auth.models import User
from .models import Reservation
import datetime
from django.test import TestCase
import django
from bookatable.models import Reservation

django.setup()


def test_user():
  user = User.objects.create_user(username="test_user", password="password123")
  return user


def test_reservation(test_user):
  reservation = Reservation.objects.create(
      user=test_user,
      name="John Doe",
      email="johndoe@example.com",
      phone_number="1234567890",
      date=datetime.date.today() + datetime.timedelta(days=7),
      time=datetime.time(hour=18, minute=0),
      number_of_guests=2,
  )
  return reservation


class TestReservationModel(TestCase):

  def test_user_creation(self, test_user):
    self.assertTrue(User.objects.filter(username="test_user").exists())

  def test_reservation_creation(self, test_reservation):
    self.assertTrue(Reservation.objects.filter(name="John Doe").exists())

  def test_reservation_read(self, test_reservation):
    reservation = Reservation.objects.get(pk=test_reservation.pk)
    self.assertEqual(reservation.name, "John Doe")

  def test_reservation_update(self, test_reservation):
    test_reservation.email = "new_email@example.com"
    test_reservation.save()
    reservation = Reservation.objects.get(pk=test_reservation.pk)
    self.assertEqual(reservation.email, "new_email@example.com")

  def test_reservation_delete(self, test_reservation):
    test_reservation.delete()
    self.assertFalse(Reservation.objects.filter(pk=test_reservation.pk).exists())


if __name__ == '__main__':
  pytest.main()


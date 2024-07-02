# Reference, modified: Code Institute Curriculum and Code Star Project
# Reference, modified: https://github.com/flatplanet/Django-CRM
# Reference, modified: https://www.pythonpool.com/python-unittest-vs-pytest/
# Notes: Below code is based on the above references, modifed for the project

from django.test import TestCase

from bookatable.models import Reservation

# Reference, modified:: https://www.pythonpool.com/python-unittest-vs-pytest/


class ReservationTests(TestCase):
    """Tests for Reservation model functionality using a PostgreSQL database."""

    def test_create_reservation(self):
        """Test creating a reservation with required fields."""
        reservation = Reservation.objects.create(
            name="Test User",
             )
        self.assertEqual(reservation.name, "Test User")

    
    def test_read_reservation(self):
        """Test reading a reservation."""
        reservation = Reservation.objects.create(
            name="Sample Name",
             )
        fetched_reservation = Reservation.objects.get(pk=reservation.pk)
        self.assertEqual(fetched_reservation.name, "Sample Name")
        
        
    def test_update_reservation(self):
        """Test updating a reservation."""
        reservation = Reservation.objects.create(
            name="Original Name",
        )
        reservation.name = "Updated Name"
        reservation.save()
        updated_reservation = Reservation.objects.get(pk=reservation.pk)
        self.assertEqual(updated_reservation.name, "Updated Name")

    def test_delete_reservation(self):
        """Test deleting a reservation."""
        reservation = Reservation.objects.create(
            name="Reservation Name",
        )
        reservation_count = Reservation.objects.count()
        reservation.delete()
        self.assertEqual(Reservation.objects.count(), reservation_count - 1)    
        
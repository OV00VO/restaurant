import os
from dotenv import load_dotenv
import psycopg2
from unittest.mock import patch
from django.contrib.auth.models import User
from django.test import TestCase
from bookatable.models import Reservation 

def test_connect_to_database():
    """Tests connecting to the database using psycopg2."""
    load_dotenv()

    db_name = os.getenv('DB_NAME')
    db_user = os.getenv('DB_USER')
    db_password = os.getenv('DB_PASSWORD')

    db_host = os.getenv('DB_HOST')
    db_port = os.getenv('DB_PORT')
    db_ssl = os.getenv('DB_SSL')

    try:
        conn = psycopg2.connect(
            dbname=db_name,
            user=db_user,
            password=db_password,
            host=db_host,
            port=db_port,
            sslmode=db_ssl,
        )

        print("Connected to the database successfully.")

    except Exception as e:
        print("Connection error:", e)
    finally:
        if conn:
            conn.close()
            print("Connection closed.")

from django.contrib.auth.models import User
from django.test import TestCase
from bookatable.models import Reservation

class BookingTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        """Creates the test user (if needed)."""

    def create_test_user(self):
        """Creates a test user for booking."""
        return User.objects.create_user(username='test_user', password='test_password')

    def create_booking_data(self):
        """Creates valid booking data."""
        return {
            'item_id': 1,
            'booking_date': datetime.date.today() + datetime.timedelta(days=7),
        }

    def test_booking_success(self):
        """Tests successful booking with database interaction."""

        test_user = self.create_test_user()

        self.client.login(username='test_user1', password='test_password')

        booking_data = self.create_booking_data()

        booking_url = reverse('my_reservations')
        response = self.client.post(booking_url, booking_data)

        self.assertEqual(response.status_code, 200)

        booking = Reservation.objects.get(user=test_user, **booking_data)
        self.assertIsNotNone(booking)
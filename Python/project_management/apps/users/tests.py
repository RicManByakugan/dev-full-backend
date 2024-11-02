from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import User

class UserAPITest(APITestCase):
    def setUp(self):
        self.user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User'
        }

    def test_create_user(self):
        response = self.client.post(reverse('user-list-create'), self.user_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)

    def test_get_users(self):
        User.objects.create(**self.user_data)
        response = self.client.get(reverse('user-list-create'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_update_user(self):
        user = User.objects.create(**self.user_data)
        updated_data = {'username': 'updateduser'}
        response = self.client.patch(reverse('user-detail', args=[user.id]), updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user.refresh_from_db()
        self.assertEqual(user.username, 'updateduser')

    def test_delete_user(self):
        user = User.objects.create(**self.user_data)
        response = self.client.delete(reverse('user-detail', args=[user.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(User.objects.count(), 0)

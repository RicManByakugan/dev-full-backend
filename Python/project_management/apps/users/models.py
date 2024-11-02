from django.db import models
from django.contrib.auth.models import AbstractUser

# Model for User from AbstractUser Django
class UserProfile(AbstractUser):
    bio = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    
    def __str__(self):
        return self.username
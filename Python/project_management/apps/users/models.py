from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Model for User from AbstractUser Django
class UserProfile(AbstractUser):
    email = models.EmailField(unique=True)
    bio = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    
    # Ajoutez des relations avec un `related_name` unique
    groups = models.ManyToManyField(
        Group,
        related_name='user_profiles',  # Changez le nom ici pour éviter le conflit
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='user_profiles',  # Changez le nom ici pour éviter le conflit
        blank=True,
    )
    def __str__(self):
        return self.username
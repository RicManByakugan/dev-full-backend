from django.db import models
from apps.users.models import UserProfile

# Project Models for User
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    owner = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="projects")
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title
    

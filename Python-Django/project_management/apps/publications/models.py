from django.db import models
from apps.users.models import UserProfile
from apps.projects.models import Project

class Publication(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="publications")
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="publications")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

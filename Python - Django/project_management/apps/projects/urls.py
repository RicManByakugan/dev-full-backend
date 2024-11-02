from django.urls import path
from .views import list_projects, create_project, retrieve_project, update_project, delete_project

urlpatterns = [
    path('list', list_projects, name='list-projects'),
    path('create/', create_project, name='create-project'),
    path('<int:pk>/', retrieve_project, name='retrieve-project'),
    path('<int:pk>/update/', update_project, name='update-project'),
    path('<int:pk>/delete/', delete_project, name='delete-project'),
]

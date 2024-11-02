from django.urls import path
from .views import create_user, list_users, retrieve_user, update_user, delete_user

urlpatterns = [
    path('list/', list_users, name='list-user'),
    path('create/', create_user, name='create-user'),
    path('<int:pk>/', retrieve_user, name='retrieve-user'),
    path('<int:pk>/update/', update_user, name='update-user'),
    path('<int:pk>/delete/', delete_user, name='delete-user'),
]
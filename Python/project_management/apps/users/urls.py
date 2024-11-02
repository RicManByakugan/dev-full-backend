from django.urls import path
from .views import UserListCreate, UserRetrieveUpdateDestroy

urlpatterns = [
    # POST to create & GET to list users
    path('users/', UserListCreate.as_view(), name='user-list-create'),
    # GET to detail user, UPDATE to update user (email: newvalue), DELETE to delete user
    path('users/<int:pk>/', UserRetrieveUpdateDestroy.as_view(), name='user-detail'),
]

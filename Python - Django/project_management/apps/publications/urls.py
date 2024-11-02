from django.urls import path
from .views import list_publications, create_publication, retrieve_publication, update_publication, delete_publication

urlpatterns = [
    path('list/', list_publications, name='list-publications'),
    path('create/', create_publication, name='create-publication'),
    path('<int:pk>/', retrieve_publication, name='retrieve-publication'),
    path('<int:pk>/update/', update_publication, name='update-publication'),
    path('<int:pk>/delete/', delete_publication, name='delete-publication'),
]

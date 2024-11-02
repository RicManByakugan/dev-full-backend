# apps/publications/views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Publication
from .serializers import PublicationSerializer

# List all publications
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_publications(request):
    publications = Publication.objects.all()
    serializer = PublicationSerializer(publications, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Create a new publication
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_publication(request):
    serializer = PublicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Retrieve a single publication
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrieve_publication(request, pk):
    try:
        publication = Publication.objects.get(pk=pk)
    except Publication.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = PublicationSerializer(publication)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Update an existing publication
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_publication(request, pk):
    try:
        publication = Publication.objects.get(pk=pk)
    except Publication.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PublicationSerializer(publication, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete a publication
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_publication(request, pk):
    try:
        publication = Publication.objects.get(pk=pk)
    except Publication.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    publication.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

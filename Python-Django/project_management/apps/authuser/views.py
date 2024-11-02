# auth/views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .serializers import UserAuthSerializer
from rest_framework_simplejwt.tokens import RefreshToken

# User actif
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_current_user(request):
    user = request.user
    serializer = UserAuthSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)

# User Registration
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = UserAuthSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User Login
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    
    if user is not None:
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            "message": "Login successful.",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_200_OK)
    
    return Response({"error": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)

# User Logout
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    logout(request)
    return Response({"message": "Logout successful."}, status=status.HTTP_200_OK)

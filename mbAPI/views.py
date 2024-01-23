from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.serializers import serialize
from django.http import JsonResponse

from .models import User

# Create your views here.
def api_root(request):
    return JsonResponse({'message': 'Welcome to the API!'})

class Login(APIView):
    def post(self, request):
        # Handle login request
        # print(request.data)
        # naive password matching but will bump later

        username = request.data["username"]
        password = request.data["password"]

        try:
            user = User.objects.filter(email=username).first()
            if user.email == username or user.phone_number == username:
                if password == user.password:
                    return Response({"message":"Log in success"},status=status.HTTP_200_OK)
                else:
                    return Response({"message": "Password Mismatch"}, status=status.HTTP_401_UNAUTHORIZED)
        
        except Exception as e:
            return Response({"message": "User Not found"}, status=status.HTTP_401_UNAUTHORIZED)

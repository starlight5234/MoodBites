from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.serializers import serialize
from django.http import JsonResponse

# Create your views here.
def api_root(request):
    return JsonResponse({'message': 'Welcome to the API!'})

class Login(APIView):
    def post(self, request):
        # Handle login request
        # print(request.data)
        return Response({"message":"Okay"},status=status.HTTP_200_OK)

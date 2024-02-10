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

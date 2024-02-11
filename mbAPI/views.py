from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.serializers import serialize
from django.http import JsonResponse

from mbAPI.models import RestaurantRequestModel
from mbAPI.serializers import RestaurantRequestSerializer

# Create your views here.
def api_root(request):
    return JsonResponse({'message': 'Welcome to the API!'})

class reqRes(APIView):
    def get(self, request):
        try:
            # Access the "set" value from the request JSON
            print(request.data)
            set_value = int(request.data.get("set", 0))
            search_limit = 9 * set_value
            
            # Perform a database query
            queryset = RestaurantRequestModel.objects.all()[:search_limit]
            
            # Serialize the data
            serializer = RestaurantRequestSerializer(queryset, many=True)
            
            # Return the serialized data
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ValueError:
            return Response({"error": "Invalid 'set' value in the request JSON"}, status=status.HTTP_400_BAD_REQUEST)

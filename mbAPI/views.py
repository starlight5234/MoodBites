from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.serializers import serialize
from django.http import JsonResponse

from mbAPI.models import Restaurant
from mbAPI.serializers import RestaurantRequestSerializer

import os
from datetime import datetime

# Create your views here.
def api_root(request):
    return JsonResponse({'message': 'Welcome to the API!'})

class reqRes(APIView):
    def post(self, request):
        try:
            # Access the "set" value from the request JSON
            print(request.data)
            index_value = int(request.data.get("index", 0))
            card_count = 9
            search_limit = card_count * (index_value - 1)
            
            # Perform a database query
            queryset = Restaurant.objects.order_by('index')[search_limit:search_limit + card_count]
            
            # Serialize the data
            serializer = RestaurantRequestSerializer(queryset, many=True)
            
            # Return the serialized data
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ValueError:
            return Response({"error": "Invalid 'index' value in the request JSON"}, status=status.HTTP_400_BAD_REQUEST)

class PickleFileUploadView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            # Access the file using request.FILES['file']
            uploaded_file = request.FILES['file']

            # Create a "pickle" folder if it doesn't exist
            pickle_folder = os.path.join('media', 'pickle')
            os.makedirs(pickle_folder, exist_ok=True)

            # Generate a timestamp to use in the filename
            timestamp = datetime.now().strftime("%Y-%m-%d-%H-%M-%S")

            # Create the filename with the timestamp
            filename = f"{uploaded_file.name}-{timestamp}"

            # Build the full path to save the file
            file_path = os.path.join(pickle_folder, filename)

            # Save the file to the server
            with open(file_path, 'wb') as file:
                for chunk in uploaded_file.chunks():
                    file.write(chunk)

            # Respond with a success message
            return Response({'message': 'File uploaded successfully.'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': f'Error uploading file: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

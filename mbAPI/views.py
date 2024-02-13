from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.serializers import serialize
from django.http import JsonResponse
from django.db.models import Q

from mbAPI.models import Restaurant
from mbAPI.serializers import RestaurantRequestSerializer

import os, threading
from datetime import datetime

from .helpers import pickleThread

# Create your views here.
def api_root(request):
    return JsonResponse({'message': 'Welcome to the API!'})

class HomeView(APIView):
    def post(self, request):
        try:
            # Access the "set" value from the request JSON
            print(request.data)
            index_value = int(request.data.get("index", 0))
            card_count = 9
            search_limit = card_count * (index_value - 1)
            
            if index_value > 5:
                return Response([], status=status.HTTP_200_OK)

            # Perform a database query
            queryset = Restaurant.objects.order_by('index')[search_limit:search_limit + card_count]
            
            # Serialize the data
            serializer = RestaurantRequestSerializer(queryset, many=True)
            
            # Return the serialized data
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ValueError:
            return Response({"error": "Invalid 'index' value in the request JSON"}, status=status.HTTP_400_BAD_REQUEST)

class reqRes(APIView):
    def post(self, request):
        try:
            # Access the "set" value from the request JSON
            print(request.data)
            index_value = int(request.data.get("index", 0))
            card_count = 9
            search_limit = card_count * (index_value - 1)

            # Perform a database query
            queryset = Restaurant.objects.all()
            query = Q()
            filters = request.data.get("filters", {})
            
            # Search for category
            category = filters.get("category")

            if category:
                category_list = []

                match category:
                    case "dineout":
                        category_list = [
                            'Buffet',
                            'Cafe',
                            'Dine-Out',
                            'Dessert'
                        ]
                    case "delivery":
                        category_list = [
                            'Delivery'
                        ]
                    case "nightlife":
                        category_list = [
                            'Drinks',
                            'Pubs'
                        ]

                for c in category_list:
                    query |= Q(type__icontains=c)
                
                queryset = queryset.filter(query)
                print("Category", queryset)
            else:
                print("No category(type) filter")

            # Search for city
            city = filters.get("city")
            if city:
                # query |= Q(city__icontains=city)
                queryset = queryset.filter(city__icontains=city)
                print("City", queryset)
            else:
                print("No city filter")
            
            # Search for rating
            rating = filters.get("rating")
            if rating:
                # query |= Q(rate__gte=rating)
                queryset = queryset.filter(rate__gte=rating)
                print("Rating", queryset)
            else:
                print("No rating filter")

            # Search if Online order
            order = filters.get("order")
            if order:
                # query |= Q(online_order=order)
                for r in queryset:
                    print(r, r.online_order)
                queryset = queryset.filter(online_order=order)
                print("Order", queryset)
            else:
                print("No order filter")

            # Search if online booking of table
            booking = filters.get("booking")
            if booking:
                # query |= Q(book_table=booking)
                queryset = queryset.filter(book_table=booking)
                print("Booking", queryset)
            else:
                print("No booking filter")
            
            pricing = filters.get("pricing")
            # if pricing:
            #     match pricing:
            #         case "standard":
            #             query |= Q(cost__lte=500)
            #         case "premium":
            #             query |= Q(cost__lte=1000) & ~Q(cost__lte=500)
            #         case "luxury":
            #             query |= Q(cost__gte=1000)
            if pricing:
                if pricing == 'standard':
                    queryset = queryset.filter(cost__lt=500)
                elif pricing == 'premium':
                    queryset = queryset.filter(cost_gte=500, cost_lte=1000)
                elif pricing == 'luxury':
                    queryset = queryset.filter(cost__gte=1000)
                
                print("Pricing", queryset)
            else:
                print("No pricing filter")

            # Search the query
            # queryset = queryset.filter(query).order_by('-votes')[search_limit:search_limit + card_count]
            queryset = queryset.order_by('-votes')[search_limit:search_limit + card_count]
            
            # Serialize the data
            serializer = RestaurantRequestSerializer(queryset, many=True)
            
            # Return the serialized data
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ValueError:
            return Response({"error": "Invalid 'index' value in the request JSON"}, status=status.HTTP_400_BAD_REQUEST)

class PickleFileUploadView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            excel_file = ""

            # Access all files using request.FILES
            for file_name, uploaded_file in request.FILES.items():
                # Generate a timestamp to use in the filename
                timestamp = datetime.now().strftime("%Y-%m-%d-%H-%M-%S")

                # Create a "pickle" folder if it doesn't exist
                pickle_folder = os.path.join('media', 'pickleUpload', timestamp)
                os.makedirs(pickle_folder, exist_ok=True)

                # Create the filename with the timestamp and original file name
                filename = f"{uploaded_file.name}"

                if ".xlsx" in filename:
                    excel_file = filename

                # Build the full path to save the file
                file_path = os.path.join(pickle_folder, filename)

                # Save the file to the server
                with open(file_path, 'wb') as file:
                    for chunk in uploaded_file.chunks():
                        file.write(chunk)

            if excel_file:
                # Run a thread after each file upload is successful
                process_thread = threading.Thread(target=pickleThread.process_file_thread, args=(excel_file,))
                process_thread.daemon = True
                process_thread.start()
                process_thread.join()

            # Respond with a success message
            return Response({'message': 'File uploaded successfully.'}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': f'Error uploading file: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

from rest_framework import serializers

from mbAPI.models import Restaurant

class RestaurantRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        # fields = '__all__'
        exclude = ['online_order', 'book_table']

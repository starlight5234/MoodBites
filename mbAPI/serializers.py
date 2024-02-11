from rest_framework import serializers

from mbAPI.models import RestaurantRequestModel

class RestaurantRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantRequestModel
        fields = '__all__'
        # exclude = ['id']

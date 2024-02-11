from django.db import models

# Create your models here.
class RestaurantRequestModel(models.Model):
    url = models.URLField()
    name = models.CharField(max_length=255)
    rest_type = models.CharField(max_length=255)
    rate = models.DecimalField(max_digits=3, decimal_places=2)
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    votes = models.IntegerField()
    city = models.CharField(max_length=255)

    def __str__(self):
        return self.name

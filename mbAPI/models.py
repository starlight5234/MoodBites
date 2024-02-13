from django.db import models

# Create your models here.
class Restaurant(models.Model):
    index = models.AutoField(primary_key=True)
    url = models.URLField(max_length=200)
    name = models.CharField(max_length=100)
    online_order = models.BooleanField(default=False)
    book_table = models.BooleanField(default=False)
    rate = models.FloatField()
    votes = models.IntegerField()
    location = models.CharField(max_length=100)
    rest_type = models.CharField(max_length=100, blank=True, null=True, default='')
    dish_liked = models.CharField(max_length=200, blank=True, null=True, default='')
    cuisines = models.CharField(max_length=200, blank=True, null=True, default='')
    cost = models.IntegerField(default=0)
    type = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    is_recommended = models.BooleanField(default=False)

    def __str__(self):
        return self.name

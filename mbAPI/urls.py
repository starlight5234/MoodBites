from django.urls import path
from .views import api_root, reqRes

urlpatterns = [
    path('', api_root, name='api-root'),
    path('reqRes', reqRes.as_view(), name='restaurant-req'),
]

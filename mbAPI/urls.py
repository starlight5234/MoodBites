from django.urls import path
from .views import api_root

from .views import Login

urlpatterns = [
    path('', api_root, name='api-root'),
    path('login', Login.as_view(), name='login'),
]

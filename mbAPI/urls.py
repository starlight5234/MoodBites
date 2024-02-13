from django.urls import path
from .views import api_root, HomeView, reqRes, PickleFileUploadView

urlpatterns = [
    path('', api_root, name='api-root'),
    path('home', HomeView.as_view(), name='home-view'),
    path('reqRes', reqRes.as_view(), name='restaurant-req'),
    path('pickleUpload', PickleFileUploadView.as_view(), name='pickle'),
]

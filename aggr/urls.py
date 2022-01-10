from django.urls import path
from . import views 

# urls to all the pages in this web application
urlpatterns = [
    path("", views.index, name="index"),
    path("connected", views.museum, name="museum"),
    path("1", views.test, name="test")
]
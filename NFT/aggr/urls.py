from django.urls import path
from . import views 

urlpatterns = [
    path("", views.index, name="index"),
    #path("<str:address", views.logged(), name="logged"),
    path("1", views.test, name="test")
]
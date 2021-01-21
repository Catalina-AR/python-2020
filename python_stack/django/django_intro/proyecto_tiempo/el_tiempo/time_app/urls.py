from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
path('que_hora_es',views.tiempo),
]

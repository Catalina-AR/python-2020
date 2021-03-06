from django.urls import path
from . import views

urlpatterns = [
    path('', views.indice),
    path('nuevo/', views.nuevo),
    path('create/', views.create),
    path('show/<int:valor>', views.show),
    path('editar', views.editar),
    path('eliminar/', views.destruir),
]
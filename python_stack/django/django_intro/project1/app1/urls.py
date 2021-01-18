from django.urls import path
from . import views

urlpatterns = [
    path('', views.indice),
    path('new/', views.nuevo),
    path('create/', views.create),
    path('show/<int:my_val>', views.show),
    path('editar', views.editar),
    path('eliminar/', views.destruir),
]
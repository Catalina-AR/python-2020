from django.shortcuts import render

# Create your views here.
#from django.shortcuts import render, HttpResponse
#def index(request):
    #return HttpResponse("this is the equivalent of @app.route('/')!")

from django.shortcuts import render, HttpResponse
from time import gmtime, strftime
from datetime import datetime


def index(request):
    return HttpResponse("señale ruta ")

def tiempo(request):

    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime()),
        "fecha": strftime("%b %d, %Y", gmtime()),
        "hora": strftime("%H:%M %p", gmtime()),

    }
    return render(request, 'index.html', context)


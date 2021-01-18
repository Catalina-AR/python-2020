from django.shortcuts import render

# Create your views here.
#from django.shortcuts import render, HttpResponse
#def index(request):
    #html='''
    #'''
    #return HttpResponse("this is the equivalent of @app.route('/')!")

from django.shortcuts import HttpResponse, redirect

def indice(Request):
    return HttpResponse("marcador de posición para luego mostrar una lista de todos los blogs")

def nuevo (Request):
    return HttpResponse("marcador de posición para mostrar un nuevo formulario para crear un nuevo blog")

def create(request):
	return redirect("/")

def show (Request, valor):
    return HttpResponse(f"marcador de posicion para mostrar el numero de blog: {my_val}")

def editar (Request):
    return HttpResponse("marcador de posición para editar el blog")

def destruir (Request):
    return redirect("/")
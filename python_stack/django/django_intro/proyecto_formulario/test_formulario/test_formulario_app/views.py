from django.shortcuts import render, HttpResponse
def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")

#para trabajar con paginas web
#from django.shortcuts import render	# notice the import!
#def index(request):
    #return render(request, "index.html")

# Create your views here.

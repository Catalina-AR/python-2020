#from django.shortcuts import render, HttpResponse
#def index(request):
    #return HttpResponse("this is the equivalent of @app.route('/')!")

#para trabajar con paginas web
#from django.shortcuts import render	# notice the import!
#def index(request):
    #return render(request, "index.html")

from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string


from django.shortcuts import render
from django.utils.crypto import get_random_string


def function_1(request):
    request.session['name'] = request.POST['name']
    request.session['counter'] = 50

def index(request):
    request.session['counter'] = 0
    return render(request, 'index.html')

def random(request):
    request.session['counter'] += 1
    context = {
        "word": get_random_string(length=14)
    }
    return render(request, 'index.html', context)
# Create your views here.

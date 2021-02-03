from django.shortcuts import render
def first_view(request):
    context={
        some_data:"hello"
    }
    return render((request,"probando_todo_app/index.html",context))

def second_view(request):
    context = {
        'data': [1,2,3]
    }
    return render(request,"probando_todo_app/other_template.html",context)
# Create your views here.

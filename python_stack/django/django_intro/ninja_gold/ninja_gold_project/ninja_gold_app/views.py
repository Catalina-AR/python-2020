from django.shortcuts import render, redirect
import random
from datetime import datetime


def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
        request.session['logs'] = []

    print(f' ORO = {request.session["gold"]}')
    return render(request, 'index.html')


def process_money(request):
    if request.method == "POST":

        timestamp = datetime.now().strftime("%Y/%m/%d %I:%M %p")
        output_print = ""

        if request.POST['where_from'] == "farm":
            print('Fuiste a la granja!')
            gold_earned = random.randint(10, 20)

            log = f"<li class='green'> Ganaste {gold_earned} de oro de la granja! ({timestamp}) </li>"
            request.session['gold'] += gold_earned
            output_print = f"Ganaste {gold_earned} de {request.POST['where_from']}! ({timestamp})"
            print(output_print)

        if request.POST['where_from'] == "cave":
            print('Fuiste a la cueva')
            request.session['gold'] += random.randint(5, 10)
            log = f"<li class='green'> Ganaste {request.session['gold']} de oro de la Cueva! ({timestamp}) </li>"

        if request.POST['where_from'] == "house":
            print('Fuiste a la Casa')
            request.session['gold'] += random.randint(2, 5)
            log = f"<li class='green'> Ganaste {request.session['gold']} de oro de la casa! ({timestamp}) </li>"

        if request.POST['where_from'] == "casino":
            print(' Fuiste al casino')
            restar_o_sumar = random.randint(0, 1)
            print('', restar_o_sumar)
            if restar_o_sumar == 0:
                my_gold = random.randint(0, 50)
                request.session['gold'] -= my_gold
                log = f"<li class='red'> Ouch entraste al casino y perdiste -{my_gold} de oro ({timestamp}) </li>"
            elif restar_o_sumar == 1:
                my_gold = random.randint(0, 50)
                request.session['gold'] += my_gold
                log = f"<li class='green'> Ganaste {my_gold} de oro del casino! ({timestamp}) </li>"

        request.session['logs'].append(log)

    return redirect('/')


def clear_session(request):
    print('\n === Reset ===\n')
    request.session.clear()
    if 'gold' in request.session:
        del request.session['gold']

    return redirect('/')
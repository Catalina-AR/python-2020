# Con este concepto de parámetros predeterminados en mente, el objetivo de esta asignación es escribir una sola función, randInt () que tome hasta 2 argumentos.

# Si no se proporcionan argumentos, la función debería devolver un entero aleatorio entre 0 y 100.
# Si solo se proporciona un número máximo, la función debe devolver un número entero aleatorio entre 0 y el número máximo.
# Si solo se proporciona un número mínimo, la función debe devolver un número entero aleatorio entre el número mínimo y 100
# Si se proporcionan un número mínimo y máximo, la función debe devolver un número entero aleatorio entre esos 2 valores.
# Aquí hay un par de notas importantes sobre el uso de random.random () y redondeo.
# (Crea esta función sin usar random.randInt () - ¡estamos tratando de construir ese método nosotros mismos para esta tarea!)

import random
def randInt(min=0, max=100):
    num = random.random() * max
    return round(num)
print(randInt())
print(randInt(max=100))
print(randInt(max=50))
print(randInt(min=50, max=100))
print(randInt(min=50))
print(randInt(min=50, max=500))

# random.random() devuelve un número flotante aleatorio entre 0.00 y 1.00
# random.random() * 50 devuelve un número flotante aleatorio entre 0.00 y 50.99
# random.random() * 25 + 10 devuelve un número flotante aleatorio entre 10.00 y 35.99
# round(num) devuelve el valor entero redondeado de num
# Aquí hay un poco de código para comenzar, con algunos casos de prueba y resultados esperados. Prueba cada llamada de función una a la vez y varias veces cada una para asegurarse de obtener el rango correcto.

import random
def randFloat(min=0.00  , max= 1.00):
    num = random.random()
    return num
print(randFloat())

import random
def randFloat(min=0.00  , max= 50.99):
    num = random.random()*50
    return num
print(randFloat())

import random
def randFloat(min=10.00 , max= 35.99  ):
    num = random.random() * 25 + 10
    return num
print(randFloat())

import random
def randRound(min=0.000 , max=3.141592653):
    num = round()
    return num
print(randRound())



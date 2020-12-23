# 1.Tamaño grande: dada una lista, escriba una función que cambie todos los números positivos de la lista a "grande".
# Ejemplo: biggie_size ([- 1, 3, 5, -5]) devuelve la misma lista, pero cuyos valores son ahora [-1, "big", "big", -5]
def tamaño_grande(arr):
    for i in arr:
        if i >= 0:
            i = "grande"
    return arr


print(tamaño_grande([-1, 3, 5, -5]))


# 2.Contar positivos : dada una lista de números, cree una función para reemplazar el último valor con el número de valores positivos. (Tenga en cuenta que cero no se considera un número positivo).
# Ejemplo: count_positives ([- 1,1,1,1]) cambia la lista original a [-1,1,1,3] y la devuelve
# Ejemplo: count_positives ([1,6, -4, -2, -7, -2]) cambia la lista a [1,6, -4, -2, -7,2] y la devuelve

def contar_positivos(lst):
    count = 0
    for i in lst:
        if i > 0:
            count += 1
    lst.pop()
    lst.append(count)
    print(lst)


arr = [-1, 1, 1, 1]
contar_positivos(arr)


# 3.Suma total : crea una función que toma una lista y devuelve la suma de todos los valores de la matriz.
# Ejemplo: sum_total ([1,2,3,4]) debería devolver 10
# Ejemplo: sum_total ([6,3, -2]) debería devolver 7
def sumTotal(arr):
    sum = 0
    for i in arr:
        sum += i
    return sum


print(sumTotal([1, 2, 3, 4]))


# 4.Promedio : crea una función que toma una lista y devuelve el promedio de todos los valores.
# Ejemplo: el promedio ([1,2,3,4]) debería devolver 2.5
def average(arr):
    sum = 0
    for i in range(len(arr)):
        sum = sum + arr[i]
    return sum / len(arr)


print(average([1, 2, 3, 4]))


# 5.Longitud : crea una función que toma una lista y devuelve la longitud de la lista.
# Ejemplo: la longitud ([37,2,1, -9]) debería devolver 4
# Ejemplo: longitud ([]) debería devolver 0

def longitud(arr):
    return len(arr)


print(longitud([1, 2, 3, 4]))


# 6.Mínimo : crea una función que tome una lista de números y devuelva el valor mínimo en la lista. Si la lista está vacía, haga que la función devuelva False.
# Ejemplo: mínimo ([37,2,1, -9]) debería devolver -9
# Ejemplo: mínimo ([]) debería devolver False

def mini(array):
    if len(array) == 0:
        return False
    minimo = array[0]
    for i in range(len(array)):
        if minimo > array[i]:
            minimo = array[i]
    return minimo


print(mini([37, 2, 1, -9]))


# 7.Máximo : crea una función que toma una lista y devuelve el valor máximo en la matriz.
# Si la lista está vacía, haga que la función devuelva False.
# Ejemplo: máximo ([37,2,1, -9]) debería devolver 37
# Ejemplo: máximo ([]) debería devolver False
def maxi(array):
    if len(array) == 0:
        return False
    maximum = array[0]
    for i in range(len(array)):
        if maximo < array[i]:
            maximo = array[i]
    return maximo


print(maxi([37, 2, 1, -9]))


# 8.Análisis final : crea una función que tome una lista y devuelva
# un diccionario que tenga la suma total, promedio, mínimo, máximo y longitud de la lista.
# Ejemplo: ultimate_analysis ([37,2,1, -9]) debería devolver {'totalTotal': 31, 'promedio': 7.75, 'mínimo': -9, 'máximo': 37, 'longitud': 4}

def análisis_final(arr):
    diccionario = {"sumaTotal": arr[0], "promedio": arr[0], "minimo": arr[0], "maximo": arr[0]}
    for i in range(1,len(arr)):
        if arr[i] < diccionario["minimo"]:
            diccionario["minimo"] = arr[i]
        elif arr[i] > diccionario["maximo"]:
            diccionario["maximo"] = arr[i]
        diccionario["sumaTotal"] += arr[i]
        diccionario["promedio"] += arr[i]
    diccionario["promedio"] = diccionario["promedio"] / len(arr)
    print(diccionario)
    return diccionario
análisis_final([37,2,1, -9])

# 9.Lista inversa : crea una función que tome una lista y la devuelva con los valores invertidos. Haz esto sin crear una segunda lista. (Se sabe que este desafío aparece durante las entrevistas técnicas básicas).
# Ejemplo: reverse_list ([37,2,1, -9]) debería devolver [-9,1,2,37]

def lista_inversa(arr):
    for i in range(int(len(arr)//2)):
        temp = arr[i]
        arr[i] = arr[-1-i]
        arr[-1-i] = temp
    print(arr)
lista_inversa([37,2,1,-9])


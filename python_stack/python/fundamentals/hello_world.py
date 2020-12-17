# 1. Imprimir "Hola mundo"
print("Hello World")

# 2. Imprimir "Hola Catalina!" con el nombre en una variable
name = "Catalina"
print("Hello", name)	# con una coma
print("Hello" + name)   # con un +

# 3. Imprimir "Hola 42!" con un numero en una variable
name = "42"
print( "Hello", name)	# con una coma
print( "Hello" + name) # con un + - !Este debería darnos un error!

# 4. Imprimir "Me encanta comer sushi and pizza." con los alimentos en variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print( "I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.")  # with an f string

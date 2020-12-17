
# 1. Básico : imprime todos los enteros del 0 al 150.

for i in range(151):
	print(i)

# 2. Múltiplos de cinco : imprime todos los múltiplos de 5 de 5 a 1,000

hasta = 1000000
for i in range(5,hasta+1,5):
	print(i)

# 3. Contar, Dojo Way - imprime enteros del 1 al 100.
# Si es divisible por 5, imprima "Codificación" en su lugar.
# Si es divisible por 10, imprima "Coding Dojo".

for i in range(1,101):
	if i%5==0:
		if i%10==0:
			print("Coding Dojo")
		else:
			print("Coding")
	else:
		print(i)

# 3. Whoa That Sucker's Huge : agrega enteros impares de 0 a 500,000 e imprime la suma final.
sum = 0
for i in range(1,500000,2):
	sum+=i
print(sum)

# 4. Cuenta regresiva por cuatro : imprime números positivos a partir de 2018, cuenta atrás por cuatro.

for i in range(2018,0,-4):
	print(i)

# 5. Contador flexible : establece tres variables: lowNum, highNum, mult.
# Comenzando en lowNum y pasando por highNum,
# imprima solo los enteros que son múltiplos de mult.
# Por ejemplo, si lowNum = 2, highNum = 9 y mult = 3, el bucle debe imprimir 3, 6, 9 (en líneas sucesivas)

lowNum = 2
highNum = 9
mult = 3

for i in range(lowNum, highNum+1):
	if i%mult==0:
		print(i)

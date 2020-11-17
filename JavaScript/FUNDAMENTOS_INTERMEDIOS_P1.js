/** 1
 * Sigma 
 *  Implementa una función sigma(num) que, dado un número,
 *  devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
 */

function sigma(x) {
    var num = [];
    var suma = 0;
    for (var i = 0; i <= x; i++) {
        num.push(i)
        suma += i;
    }
    return suma;
}
console.log(sigma(3));
console.log(sigma(5));


/** 2
 * Factorial 
 * Escribe una función factorial(num) que, dado un número, 
 * devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). 
 * Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
 */

function factorial(x) {
    var num = [];
    var multi = 1;
    for (var i = 1; i <= x; i++) {
        num.push(i)
        multi *= i;
    }
    return multi;
}
console.log(factorial(3))
console.log(factorial(5));



/** 3
 * Fibonacci  
 * Crea una función para generar números de Fibonacci. 
 * En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. 
 * Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). 
 * Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). 
 * Haz esto primero sin usar recursión.
 * Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 
 */
function fibonacci(x) {
    numFibonacci = 0;
    array = [0, 1];
    for (var i = 2; i <= x; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    numFibonacci = array[array.length - 1];
    return numFibonacci
}
console.log(fibonacci(7))

/** 4
 * Array: Penúltimo: 
 * Devuelve el penúltimo elemento del array. 
 * Dado [42,true,4,”Liam”, 7] devuelve “Liam”. 
 * Si el array es muy pequeño, devuelve null.   
 */

function penultimo(x) {
    if (x.length > 1) {
        return x[x.length - 2]
    } else {
        return null
    }
}
console.log(penultimo([42, true, 4, "liam", 7]))

/** 5
 * Array: “N” último:
 *  Devuelve el elemento “N” último.
 *  Dado ([5,2,3,6,4,9,7],3], devuelve 4.
 *  Si el array es muy pequeño, devuelve null. 
 */

function nUltimo(x, y) {
    if (x.length > y) {
        return x[x.length - y]
    } else {
        return null
    }
}
console.log(nUltimo([5, 2, 3, 6, 4, 9, 7], 3))

/** 6
 * Array: Segundo más grande: 
 * Devuelve el segundo elemento más grande de un array. 
 * Dado [42,1,4,3.14,7], devuelve 7.  
 * Si el array es muy pequeño, devuelve null.
 */
function array(x) {
    if (x.length < 3) {
        a = "null";
    } else {
        var nuevo = [];
        for (var i = 1; i < x.length; i++) {
            if (x[i - 1] > x[i]) {
                nuevo.push(x[i]);
                x[i] = x[i - 1];
            }
        }
        for (var i = 1; i < nuevo.length; i++) {
            if (nuevo[i - 1] > nuevo[i]) {
                nuevo[i] = nuevo[i - 1];
            }
            a = nuevo[i];
        }
    }
    return a;
}
console.log(array([42, 1, 4, 3.14, 7]))


/** 7
 * Doble Problema Par:
 * Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el orden original.
 * Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].
 */

function dobleProblemaPar(x) {
    array = [];
    for (var i = 0; i < x.length; i++) {
        array.push(x[i]);
        if (i % 2 == 0) {
            console.log(x[i] % 2);
            array.push(x[i]);
        }
    }
    return array
}
console.log(dobleProblemaPar([4, "Ulysses", 42, false, 6, 7, 8, 9]))

//PARTE2//
/** 1
 * Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto. 
 */

function fibonaccirecursivo(x) {
    if (x == 0 || x == 1) {
        return x
    }
    return (fibonaccirecursivo(x - 2) + fibonaccirecursivo(x - 1))
}
z = fibonaccirecursivo(10);
console.log(z);

/** 2
 *  Relleno recursivo - por favor mira más abajo.
 */
/** 1
 * Escribe una función que devuelve un array con todos los números del 1 al 255.
 */

function funArray() {
    let valores = [];
    for (let i = 1; i < 256; i++) {
        valores.push(i);
    }
    return valores
}
console.log(funArray());

/** 2
 * Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - 
 * Puedes usar un operador de módulo para este ejercicio.
 */

function numPar() {
    var pares = 0;
    for (let i = 1; i <= 1000; i++) {
        if (index % 2 == 0) {
            pares = pares + i;
        }
    }

    return pares;
}

console.log(numPar());

/** 3 
 * Escribe una función que devuelva la suma de todos 
 * los números impares entre 1 y 5000
 */

function sumImp() {
    let suma = 0;
    for (let index = 1; index < 5000; index++) {
        If(index % 2 != 0) {
            suma = suma + index;
        }

    }
    return suma;
}
console.log(sumImp());


/** 4
 * Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array
 * (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
 */

function sumArray(array) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma = suma + array[index]
    }
    return suma
}
console.log(sumArray([10, 22, 5]));

/** 5
 *  Dado un array con múltiples valores,
 *  escribe una función que devuelva el número mayor
 */

function Mayor(array) {
    let numMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numMayor) {
            numMayor = array[i];

        }
    }
    return numMayor
}
console.log(Mayor([-3, 3, 5, 7]));

/** 6 
 * Dado un array con múltiples valores, escribe una función
 *  que devuelva el promedio de los valores
 */
function prom(array) {
    let suma = array[0];
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];

    }
    return suma / array.length;
}
console.log(prom([1, 3, 5, 7, 20]));

/**7
 * Escribe una función que devuelva un array de
 *  todos los números impares entre 1 y 50
 */

function arrayimpar() {
    let impar = [];
    for (let i = 1; i < 50; i += 2) {
        impar.push(i);
    }
    return impar;

}
console.log(arrayimpar());

/** 8
 * Dado un valor Y, escribe una función que toma un array y devuelve
 * los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, 
 * tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7)
 */

function numerMayorarray(array, y) {
    let arraymay = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > y) {
            arraymay.push(array[i]);
        }
    }
    return arraymay;
}
console.log(numerMayorarray([1, 3, 5, 7], 3));

/** 9
 * Dado un array con múltiples valores, escribe una 
 * función que reemplace cada valor por el cuadrado del mismo 
 * valor (ej: [1,5,10,-2] será [1,25,100,4]).
 */

function cuadrado(array) {
    let arraycuad = [];
    let cuad;
    for (let i = 0; i < array.length; i++) {
        cuad = array[i] * array[i];
        arraycuad.push(cuad);
    }
    return arraycuad;

}
console.log(cuadrado([1, 5, 10, -2]))

/** 10
 * Dado un array con múltiples valores, escribe una función que reemplace cualquier 
 * número negativo dentro del array por 0. Cuando el programa esté listo, 
 * el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
 */

function rNega(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

console.log(rNega([1, 5, 10, -2]));

/** 11
 * Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga 
 * el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
 */

function maxminavg(array) {
    let max = array[0];
    let min = array[0];
    let sum = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
        sum = sum + array[i];
    }
    result.push(max);
    result.push(min);
    result.push(sum / array.length);
    return result;
}

console.log(maxminavg([1, 5, 10, -2]));

/** 12
 * Escribe una función que intercambie el primer y el último valor de cualquier array. 
 * La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
 */

function intercambio(array) {
    let valor = array[0];
    array[0] = array[array.length - 1];
    array.pop();
    array.push(valor);
    return array;
}
console.log(intercambio([1, 5, 10, -2]));

/** 13
 * Escribe una función que tome un array de números y reemplace cualquier valor negativo por el 
 * string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
 */

function dojo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "Dojo";
        }

    }
    return array;
}

console.log(dojo([-1, -3, 2]));
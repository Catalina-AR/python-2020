/** 1
 * Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”.
 *  Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
 */
function t_grande(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = 'BIG';
        }
    }
    return array;
}
console.log(t_grande([-1, 3, 5, -5]));



/** 2
 * Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
 * La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
 */

function p_menor_rmayor(arr) {
    var min = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < arr[i - 1]) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(p_menor_rmayor([-1, 3, 5, -5]));

/** 3 
 * Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
 * La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
 */


function p_penultimo_r_impar(arr) {
    arrnew = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 || arr[i] % 2 == -1) {
            arrnew.push(arr[i]);
        }
    }
    console.log(arr[(arr.length - 2)]);
    return arrnew[0];
}
console.log(print_penultimo_return_impar([1, 2, 3, 4, 5, 6, 7, 8, 9]));


/** 4
 * Doble Visión 
 * Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
 * Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
 */

function doble_vision(arr) {
    var newarray = [];
    var y = 0;
    for (var i = 0; i < arr.length; i++) {
        y = arr[i] + arr[i];
        newarray.push(y);
    }
    return newarray;
}
console.log(doble_vision([1, 2, 3]));

/** 5
 *  Contar Positivos 
 *  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array.
 *  Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
 */
function contar_pos(arr) {
    var y = 0;
    var z = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            y = y + 1;
        }
    }
    arr.pop(arr[z]);
    arr.push(y);
    return arr;
}
console.log(contar_pos([-1, 1, 1, 1]));


/** 6 
 * Pares e Impares 
 * Crea una función que acepte un array. 
 * Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, 
 * y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
 */
function pares_inpares(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) {
            console.log('¡Que imparcial!');
        } else {
            if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
                console.log('¡Es para bien!');
            }
        }
    }
}
pares_inpares([2, 2, 2]);


/**7
 * Incrementa los Segundos 
 * Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar
 * (arr[1], arr[3], arr[5], etc). 
 * Luego, console.log cada valor del array y devuelve arr. 
 */
function in_seg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(array[i])
    }
    return arr;
}
a = in_seg([])

/** 8
 * Longitudes previas 
 *  Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
 * reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
 * Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. 
 * Pista: ¿For loops solo puede ir hacia adelante?
 */

function longipre(arr) {
    var x = [];
    for (var i = 0; i < arr.length; i++) {
        x.push(arr[i].length);
    }
    for (var j = 1; j < arr.length; j++) {
        arr[j] = x[j - 1];
    }
    return arr;
}
console.log(longipre(['programar', 'dojo', 'genial']));



/** 9
 * Agrega Siete 
 * Construye una función que acepte un array. 
 * Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. 
 * No alteres el array original.
 *  Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
 */
function agrega7(arr) {
    var arrnew = [];
    for (var i = 0; i < arr.length; i++) {
        arrnew.push(arr[i] + 7);
    }
    return arrnew;
}
console.log(agrega7([1, 2, 3]));


/** 10
 * Array Inverso 
 * Dado un array, escribe una función que invierte sus valores en el lugar.
 * Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3].
 * Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
 */

function inverso(arr) {
    var largo = arr.length;
    for (var i = 0; i < (largo / 2); i++) {
        var aux = arr[i];
        arr[i] = arr[largo - 1 - i];
        arr[largo - 1 - i] = aux;
    }
    return arr;
}
console.log(inverso([3, 1, 6, 4, 2]));



/** 11
 * Perspectiva: Negativa 
 * Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). 
 * Dado [1,-3,5], devuelve [-1,-3,-5].
 */
function perspNeg(arr) {
    var nuevo_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            nuevo_arr.push(arr[i] * -1);
        } else {
            nuevo_arr.push(arr[i]);
        }
    }

    return nuevo_arr;
}
console.log(perspNeg([1, -3, 5]));


/** 12
 * Siempre hambriento 
 * Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
 * Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
 */
function S_hambriento(arr) {
    var comidas = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log('yummy');
            comidas++;
        }
    }
    if (comida == 0) {
        console.log("tengo hambre");
    }
}



/** 13
 * Cambiar hacia el centro 
 * Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
 * Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) 
 * cambia el array a [“pizza¨, 42, “Ada”, true]. 
 * cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1].
 *  No es necesario devolver (return) el array esta vez. 
 */
function centro(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        if (i % 2 == 0) {
            // var aux = ...
            [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
        }
    }
    return arr;
}
console.log(centro([1, 2, 3, 4, 5, 6]));

/** 14
 * Escala el Array 
 * Dado un array arr y un número num, 
 * multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. 
 * Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
 */
function escala(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * y;
    }
    return arr;
}
console.log(escala([1, 2, 3], 3));
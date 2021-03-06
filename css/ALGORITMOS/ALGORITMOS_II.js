/** 1 **/
/* las funciones nunca se ejecutan solas, solamente cuando son llamadas */
function a() {
    console.log('hello');
}
console.log('Dojo');
//R:'Dojo',

/** 2 **/
function a() {
    console.log('hello');
    return 15;
}
x = a(); //x = 15
console.log('x is', x); // 'x is 15'
//R:'hello','x is 15'

/** 3 **/
function a(n) { //n=3
    console.log('n is', n);
    return n + 15; //18
}
x = a(3); //x = 18
console.log('x is', x);

//R:'n is 3','x is 18'

/** 4 **/
function a(n) { //n=5
    console.log('n is', n);
    y = n * 2; //10
    return y; //return 10
}
x = a(3) + a(5); //x = 6 + 10 = x= 16
console.log('x is', x);
//R:'n is 3','n is 5','x is 16'

/** 5 **/
function op(a, b) { //a=3;b=5
    c = a + b; //c = 8
    console.log('c is', c);
    return c; //return 8
}
x = op(2, 3) + op(3, 5); //x= 5 + 8 > x  = 13
console.log('x is', x);

//R: 'c is 5','c is 8','x is 13'

/** 6 **/
function op(a, b) { //a=; b= 
    c = a + b; //c = 
    console.log('c is', c);
    return c; // return 
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
//x= 5+ op(3, 3)+ op(op(2, 1), op(2, 3))
//x= 5 + 6 + op(3,5) 
//x= 5+6+8 >19 ; x= 19
console.log('x is', x)

//R: 'c is 5','c is 3','c is 6','c is 3','c is 5','c is 8','x is 19'

/** 7 **/
var x = 15;

function a() {
    var x = 10;
}
console.log(x);
a();
console.log(x);
//R: 15,15

/** 8 **/
function multiply(x, y) { //x= 2, y =3
    console.log(x);
    console.log(y);
}
b = multiply(2, 3); //b= undefined
console.log(b);
//R: 2,3, undefined

/** 9 **/

function multiply(x, y) { //x=5,y=2
    return x * y; //return 5*2
}
b = multiply(2, 3); //b= 6
console.log(b);
console.log(multiply(5, 2)); //console.log(10) > 10
//R: 6,10

/** 10 **/
var x = [1, 2, 3, 4, 5, 10]; //x= []
for (var i = 0; i < 5; i++) { //i=0>3>4>7>8 ;    i = i+1 > i+=1 >i++
    i = i + 3; //
    console.log(i);
}
//rspt:3,7

/** 11 **/
var x = 15;
console.log(x); //X=15

function awesome() {
    var x = 10;
    console.log(x); //X=10
}
console.log(x); //X=15
awesome(); //X=10
console.log(x); //X=15

//R:15,15,10,15

/** 12 **/
for (var i = 0; i < 15; i += 2) { // i = i+2  
    console.log(i); //i=0>2>4>6>8>10>12>14>16  
}
//R:0,2,4,6,8,10,12,14

/** 13 **/
for (var i = 0; i < 3; i++) { //i=0>1>2>3

    for (var j = 0; j < 2; j++) { //j=0>1>2
        console.log(i * j);
    }
}
//R:0,0,0,1,0,2

/** 14 **/
function looping(x, y) { //x=3; y=3
    for (var i = 0; i < x; i++) { //i=0>1>2>3

        for (var j = 0; j < x; j++) { //j=0>1>2>3
            console.log(i * j);
        }
    }
}
z = looping(3, 3); //z= undefined
console.log(z); //undefined
//R:0,0,0,0,1,2,0,2,4,undefined

/** 15 **/
function looping(x, y) { // x= 3; y= 5
    for (var i = 0; i < x; i++) { //i=0>1>2>3

        for (var j = 0; j < y; j++) { //j=0>1>2>3>4>5
            console.log(i * j);
        }
    }
    return x * y; //return 15
}
z = looping(3, 5); //z= 15
console.log(z); //15
//R:0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

/**
 * 2 parte
 * 1.-Por favor, completa los siguientes códigos para que 
 * la función imprima (print) todos los enteros (integers) de 1 a x.
 *  Si x es negativo, haz que se muestre (print/log) “número negativo” 
 * y que la función devuelva falso.
 * el return en una funcion sale de ella
 */
function printUpTo(x) { //x=-10

    for (var i = 1; i <= x; i++) { //i=1>2>3>4>5>6>7>8>9>10>11
        console.log(i); //>1,2,3,4,5,6,7,8,9,10
    }
    if (x < 0) { //-10 < 0
        console.log("numero negativo");
        return false;
    }

}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // y = false
console.log(y); // debería imprimir false

//R=1,2,3,4,5,6,7,8,9,10...1000,"numero negativo",false

/**
 * 2.-Completa el código de más abajo para que la función imprima enteros (integers)
 *  de 0 a x y donde cada entero imprima la suma (sum) parcial. 
 * Haz que la función entregue la suma final.
 */

function printSum(x) { //x=255
    var sum = 0;
    for (var i = 0; i <= x; i++) { //i=0>1>2.....254>255>256
        console.log(i) //0,1,2,...254,255
        sum = sum + i; //32385+255
        console.log(sum); //0,1,3,6,10,15,21...32131,32385,32640
    }
    return sum; //32640
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // debería imprimir 32640-255-254
    //R: 0,1,2,...255


/**
 * 3.-Completa el código a continuación para que la función entregue
 *  la suma de todos los valores en un array dado.
 */

function printSumArray(x) { //x=[1,2,3]; x[0]=>1; x[1]=>2;x[2]=>3; x.length=3
    var sum = 0; //1>3>6
    for (var i = 0; i < x.length; i++) { //i=0>1>2>3
        sum = sum + x[i]; //sum=3+3
    }
    return sum;
}
console.log(printSumArray([1, 2, 3])); // debería imprimir 6
//console.log(6)-> 6


/**
 * BONUS.-Crea una función que entregue el elemento más grande (largest element) 
 * en un array. 
 * Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.
 */

function largestElement(arreglo) { //arreglo = [1,30,5,7];arreglo.length=4

    var mayor = arreglo[0] //mayor = 1>30

    for (var i = 0; i < arreglo.length; i++) { //i=0>1>2>3>4
        if (arreglo[i] > mayor) { //7>30
            mayor = arreglo[i]
        }
    }
    return mayor
}
console.log(largestElement([1, 30, 5, 7]))
    //console.log(30);//30
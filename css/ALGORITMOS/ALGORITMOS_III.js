/** 1 **/
function a(x, y) {
    return 5; //función devuelve 5
}
console.log(a(9, 23456785));
//R:5


/** 2 **/
function a(x, y) { //x=6;y=8;
    z = []
        //z=[6,8,5]
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z); //[6,8,5]
    return z;
}
b = a(2, 2) //b = [2,2,5]
console.log(b); // [2,2,5]
console.log(a(6, 8)); //console.log([6,8,5]);//[6,8,5]
//R: [2,2,5],[2,2,5],[6,8,5],[6,8,5]


/** 3 **/
function a(x) { //x=2
    z = []; //z=[2,2]
    //z=[2,2]
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z; //return [2,2]
}
y = a(2); //y= [2,2]
y.push(5); //y= [2,2,5]
console.log(y);
//R:[2,2,5]


/** 4 **/
function a(x) { //x=[2, 3, 4, 5]; x.length=4
    if (x[0] < x[1]) { //2<3->true
        return true;
    } else {
        return false;
    }
}
b = a([2, 3, 4, 5]); //b = true
console.log(b); //true
//R: true


/** 5 **/
function a(x) { //x=[1, 2, 3, 4]; x.length=4

    for (var i = 0; i < x.length; i++) { //i=0>1>2>3>4
        if (x[i] > 0) { //4>0
            x[i] = "Coding";
        }    
    }    
    //x=["Coding","Coding","Coding","Coding"]
    return x; // return ["Coding","Coding","Coding","Coding"]
}
console.log(a([1, 2, 3, 4])); //console.log(["Coding","Coding","Coding","Coding"])
//R:["Coding","Coding","Coding","Coding"]


/** 6 **/
function a(x) { //x=[5, 7, -1, 4];x.length=4

    for (var i = 0; i < x.length; i++) { //i=0>1>2>3>4
        if (x[i] > 5) { //4>5
            x[i] = "Coding";
        } else if (x[i] < 0) { //4<0
            x[i] = "Dojo";
        }    
    }    
    //x = [5, "Coding", "Dojo", 4]
    return x; // return [5, "Coding", "Dojo", 4]
}
console.log(a([5, 7, -1, 4])); //console.log([5, "Coding", "Dojo", 4])
//R:[5, "Coding", "Dojo", 4]


/** 7 **/
function a(x) { //x[0]=>15; x[1]=12
    if (x[0] > x[1]) { //15>12
        return x[1];
    }
    return 10;
}
b = a([15, 12]) //b= 12
console.log(b);
//R:12


/** 8 **/
function sum(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
//R:undefined
var v = [1, 2, 3, 4, 5]; //v.length=5
for (var w = 0; w < v.length; w++) { //w= 0>1 >2>3
    v.pop();
}
console.log(v); //v=[1,2]

/**Parte 2**/
//1) Analiza los valores de un array y obtén el promedio (average) de esos valores://

function printAverage(x) {
    sum = 0; //acumulador
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    } //suma de todos / por la cantidad
    //var promedio = sum/x.length;
    return sum / x.length; //promedio
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5



//2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)//

function returnOddArray() {
    var arreglo = []; //[1,3,5,7...,253,255]

    for (var i = 1; i <= 255; i += 2) { //i=1>3>5>7>9>11...>253>255>257
        arreglo.push(i);
    }
    //console.log(arreglo);//[1,3,5,7...,253,255]
    return arreglo

}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]
//undefined



//3) Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..//

function squareValue(x) { //x= [1, 2, 3]; x.length=3

    for (var i = 0; i < x.length; i++) { //i=0>1>2>3

        x[i] = x[i] * x[i]; //x[2] = 3*3
    }
    return x; //[1,4,9]
}

y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]
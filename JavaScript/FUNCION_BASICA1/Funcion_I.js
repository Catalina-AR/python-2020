/** 1 **/
function a() {
    return 35;
}
console.log(a()) //a=35
    //R:35

/** 2 **/
function a() {
    return 4;
}
console.log(a() + a()); //a=4 a+a=8
//R:8

/** 3 **/
function a(b) {
    return b;
}
console.log(a(2) + a(4)); // a="2" b="4" a+b=6
//R:6

/** 4 **/
function a(b) {    
    console.log(b); //3
    return b * 3;
}
console.log(a(3)); //3*3=9
//R: 3,9

/** 5 **/
function a(b) { //b=10          //a=40
    return b * 4; //a=b*4 =>40
    console.log(b);
}
console.log(a(10)); //'40'
//R:40


/** 6 **/
function a(b) { //b=15       
    if (b < 10) { //15<10=>false
        return 2;
    } else {
        return 4; //b=4 => a=4
    }
    console.log(b);
}
console.log(a(15)); //4
//R:4

/** 7 **/
function a(b, c) { //a(3,10)=> b=3 c=10
    return b * c; //b=3*10 = a(30) 
}
console.log(10, 3); //'10,3'
console.log(a(3, 10)); //'30'
//R:10,3,30


/** 8 **/
function a(b) { //
    for (var i = 0; i < 10; i++) { //
        console.log(i); //
    } //
    return i; //
} //
console.log(3); //'3'
console.log(4); //'4'
//R:3,4

/** 9 **/
function a(b, c) {
    for (var i = b; i < c; i++) { // 3, 6, 9, 12
        console.log(i); //0+2=2; 3+2=5; 6+2=8; 9+2=11
    }
}
a();
//R:2,5,8,11

/** 10 **/
function a(b, c) { //b=0 c=10 
    for (var i = b; i < c; i++) { //0<10 true //1<10 true //2<10 true //3<10 true ...  //9<10 true //10<10 false
        console.log(i); //-->0,1,2,3,4,5,6,7,8,9
    }
    return b * c; //0*10 = a=0
}
a(0, 10); //a=0
console.log(a(0, 10)); // --> '0'
//R:0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0

/** 11 **/
function a() { //no hay llamado a la función
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}
//R:No hay llamado a la función

/** 12 **/
function a() { //no hay llamado a la función
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}
//R:no hay llamado a la función

/** 13 **/
var z = 10;

function a() { //no hay llamado a la función
    var z = 15;
    console.log(z);
}
console.log(z); //-->'10'
//R:10

/** 14 **/
var z = 10; //z=10
function a() { //''
    var z = 15; //z=15
    console.log(z); //'15'
} //z=10
a();
console.log(z); //10
//R:15,10

/** 15 **/
var z = 10; //z=10
function a() {
    var z = 15; //z=15
    console.log(z); //'15'
    return z; //z=15 = a=15
}
z = a(); //z=15
console.log(z); //'15'
//R:15,15
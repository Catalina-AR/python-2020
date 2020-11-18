var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];
for (var i = 0; i < users.length; i++) {
    if (users[i].name == "John") {
        console.log("La edad de John es: " + users[1].age);
    }
}


console.log("El nombre del primer objeto es: " + users[0].name);

for (var i = 0; i < users.length; i++) {
    console.log(users[i].name + " - " + users[i].age);
}


for (var i = 0; i < users.length; i++) {
    if (users[i].age > 18) {

        console.log("El usuario mayor de edad N°" + i + " se llama " + users[i].name);
    }
}
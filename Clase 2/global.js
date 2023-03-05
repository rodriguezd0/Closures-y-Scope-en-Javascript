var a; //Se declara la variable
var b = 'b'; //Declaración y asignación de variable
b = 'nuevo texto' //Reasignación de variable
var a = 'aa' // redeclaración


//Global Scope

var fruit = 'Apple'; //Global

function bestFruit(){
    console.log(fruit)
}

function countries(){
    country = 'Argentina' //Al no utilizar var, const o let para declarar y asignar la variable, la variable es global
    console.log(country)
}

bestFruit();
countries();
console.log(country)
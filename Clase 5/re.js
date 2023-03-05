//var Se puede acceder desde cualquier parte del código. Se puede redeclarar y modificar sin problemas
//let (dentro de un bucle, condición, función, etcétera). No se puede redeclarar pero se puede modificar
//let (dentro de un bucle, condición, función, etcétera). No se puede redeclarar ni modificar (Si es objeto o arreglo pueden modificarse las propiedades o elementos)

var firstName //Declarado
firstName = 'Dani' //Asignado
console.log(firstName) //Impresión en consola

var lastName = "Rodriguez" //Declarado y asignado
lastName = 'Segundo apellido' //Reasignado
console.log(lastName)

var secondName = 'Dani' //Declarado y asignado
var secondName = 'Sebastian' //reasignado
console.log(secondName)

//Let

let fruit = 'Uva'
fruit = 'Banana'
console.log(fruit)

//let fruit = 'Error'

//Const

const animal = 'gato'
//animal = 'pajaro'
//const animal = 'tortuga'
console.log(animal)

//No asegura inmutabilidad
const vehiculos = []
console.log(vehiculos)
vehiculos.push('auto')
console.log(vehiculos)
vehiculos.pop()
console.log(vehiculos)
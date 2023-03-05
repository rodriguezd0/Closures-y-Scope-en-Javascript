//Función dentro de una función = Función anidada
function saludar(){
    let username = 'Dani'
    function mostrarUser(){
        return username
    }
    return mostrarUser
}

const sal = saludar()
console.log(sal)
console.log(sal())
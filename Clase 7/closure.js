//Un closure es como una caja que guarda una función y sus variables. Si yo utilizo esa función en otras partes del código, puedo utilizar las variables que contiene esa "caja"
const variableGlobal = 0


//Una función dentro de una función genera un closure
function miFuncion() {
    const numero = 1
    console.log(variableGlobal)

    function interna(){ //Función interna
        const inner = 2
        console.log(numero,variableGlobal)

        function hijo(){
            console.log(inner,numero,variableGlobal)
        }
        return hijo()
    }
    return interna()
}

miFuncion()

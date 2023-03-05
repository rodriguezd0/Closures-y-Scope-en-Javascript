//let y const (Implementados en ECMAScript 6) hacen que las variables puedan funcionar dentro de un bloque
//El alcance de var es global o de función. Se puede acceder desde cualquier parte del código. Se puede redeclarar y modificar sin problemas
//El alcance de let es de bloque (dentro de un bucle, condición, función, etcétera). No se puede redeclarar pero se puede modificar
//El alcance de const es de bloque (dentro de un bucle, condición, función, etcétera). No se puede redeclarar ni modificar (Si es objeto o arreglo pueden modificarse las propiedades o elementos)
function fruits(){
    if (true){
        var fruta1 = 'uva'
        let fruta2 = 'frutilla'
        const fruta3 = '¿tomate?'
        console.log(fruta2)
        console.log(fruta3)
    }

    console.log(fruta1)

}

fruits()
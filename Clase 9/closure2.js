/*function alcancia(monedas){
    let monedasGuardadas = 0
    monedasGuardadas+=monedas
    console.log(`Monedas ${monedasGuardadas}`)
    return monedasGuardadas
}

alcancia(5)
alcancia(5)
*/

function alcanciaClosoure(){
    let monedas = 0
    function agregarMonedas(coins){
        monedas+=coins
        console.log(`Monedas $${monedas}`)
    }
    return agregarMonedas
}

const miAlcancia = alcanciaClosoure()
miAlcancia(5)
miAlcancia(10)
miAlcancia(20)

const felipeAlcancia = alcanciaClosoure()
felipeAlcancia(10)
felipeAlcancia(5)
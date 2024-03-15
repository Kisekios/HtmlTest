import { pergaminos } from "./pergamino.js"


function invocacion(numeroInvocaciones, tipoPergamino) {
    let invocacionNum = 0;

    let resultadoInvocacion = {
        position: [],
        nat5: {
            cantidad: 0,
            index: []
        },
        nat4: {
            cantidad: 0,
            index: []
        },
        nat3: {
            cantidad: 0,
            index: []
        }
    }
    while (invocacionNum < numeroInvocaciones) {
        let mob = tipoPergamino.invocar(tipoPergamino.atributos)
        if (mob.calidad === 5) {
            resultadoInvocacion.nat5.cantidad++;
            resultadoInvocacion.position.push(mob)
            resultadoInvocacion.nat5.index.push(invocacionNum)
        } else if (mob.calidad === 4) {
            resultadoInvocacion.nat4.cantidad++;
            resultadoInvocacion.position.push(mob)
            resultadoInvocacion.nat4.index.push(invocacionNum)
        } else {
            resultadoInvocacion.nat3.cantidad++;
            resultadoInvocacion.position.push(mob)
            resultadoInvocacion.nat3.index.push(invocacionNum)
        }
        invocacionNum++;
    }
    return resultadoInvocacion
}

let resultadoInvocacion = invocacion(10, pergaminos[1])
console.log(resultadoInvocacion)
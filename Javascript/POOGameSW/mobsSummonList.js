import { doncellaDemonio, señoraDelInfierno, chicaOculta, onmyouji, reinaDelDesierto } from "./mobsfamilies/doncellaDemonio.js";

//console.log(doncellaDemonio, señoraDelInfierno, chicaOculta, onmyouji, reinaDelDesierto)
function invocacion(numeroInvocaciones) {
    let invocacionNum = 0;

    let resultadoInvocacion = {
        nat5: {
            cantidad: 0,
            position: []
        },
        nat4: {
            cantidad: 0,
        },
        nat3: {
            cantidad: 0
        }
    }
    while (invocacionNum < numeroInvocaciones) {
        const calidadMobInvocado = Math.floor(Math.random() * 200) + 1;
        if (calidadMobInvocado === 1) {
            resultadoInvocacion.nat5.cantidad++;
            resultadoInvocacion.nat5.position.push(invocacionNum)
        } else if (calidadMobInvocado > 1 && calidadMobInvocado <= 17) {
            resultadoInvocacion.nat4.cantidad++;
        } else { resultadoInvocacion.nat3.cantidad++ }
        invocacionNum++;
    }
    return resultadoInvocacion
}


const invocaciones = invocacion(500)


console.log(invocaciones)
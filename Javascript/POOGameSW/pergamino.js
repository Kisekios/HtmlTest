import { nat5List } from "./mobsfamilies/Nat5Estrellas.js";
import { nat4List } from "./mobsfamilies/Nat4Estrellas.js"
import { nat3List } from "./mobsfamilies/Nat3Estrellas.js"

class Pergamino {
    constructor({
        tipo,
        probabilidad5,
        probabilidad4,
        atributos
    }) {
        this.tipo = tipo;
        this.probabilidad5 = probabilidad5;
        this.probabilidad4 = probabilidad4;
        this.atributos = atributos;
    }

    invocar(atributos) {
        const calidadMobInvocado = Math.floor(Math.random() * 200) + 1;
        let elemento
        if (atributos === "Elementales") {
            elemento = Math.floor(Math.random() * 3)
        } else if (atributos === "LuzOscuridad") {
            elemento = Math.round(Math.random() + 3);
        } else if (atributos === "Todos") {
            elemento = Math.floor(Math.random() * 5)
        }
        if (calidadMobInvocado <= this.probabilidad5) {
            const selectMobFamilies = Math.floor(Math.random() * nat5List.length)
            let atributo = Object.keys(nat5List[selectMobFamilies])
            let selection = atributo[elemento]
            return nat5List[selectMobFamilies][selection]
        } else if (calidadMobInvocado > this.probabilidad5 && calidadMobInvocado <= this.probabilidad4) {
            const selectMobFamilies = Math.floor(Math.random() * nat4List.length)
            let atributo = Object.keys(nat4List[selectMobFamilies])
            let selection = atributo[elemento]
            return nat4List[selectMobFamilies][selection]
        } else { 
            const selectMobFamilies = Math.floor(Math.random() * nat3List.length)
            let atributo = Object.keys(nat4List[selectMobFamilies])
            let selection = atributo[elemento]
            return nat3List[selectMobFamilies][selection]
        }
    }
}

const pergaminoMistico = new Pergamino({
    tipo: "Mistico",
    probabilidad5: 1,
    probabilidad4: 16,
    atributos: "Elementales"
})

const pergaminoLuzOscuridad = new Pergamino({
    tipo: "Luz y Oscuridad",
    probabilidad5: 1,
    probabilidad4: 12,
    atributos: "LuzOscuridad"
})

const pergaminoLegendario = new Pergamino({
    tipo: "Legendario",
    probabilidad5: 13,
    probabilidad4: 200,
    atributos: "Elementales"
})

const pergaminoLegendarioLD = new Pergamino({
    tipo: "Legendario ELD",
    probabilidad5: 14,
    probabilidad4: 200,
    atributos: "Todos"
})

const pergaminoTrascendental = new Pergamino({
    tipo: "Trascendental",
    probabilidad5: 200,
    probabilidad4: 0,
    atributos: "Elementales"
})

const pergaminoTrascendentalLD = new Pergamino({
    tipo: "Trascendental ELD",
    probabilidad5: 200,
    probabilidad4: 0,
    atributos: "Todos"
})



export const pergaminos = [pergaminoMistico, pergaminoLuzOscuridad, pergaminoLegendario, pergaminoLegendarioLD, pergaminoTrascendental, pergaminoTrascendentalLD]
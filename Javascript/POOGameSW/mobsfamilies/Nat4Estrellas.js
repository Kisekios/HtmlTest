import { FuegoMobGeneral, AguaMobGeneral, VientoMobGeneral, LuzMobGeneral, OscuridadMobGeneral } from "../classMobGeneral.js"
import { MobFamily } from "./classMobFamily.js"

// cSpell: disable

function bailarinasDeEspadas() {
    const berenice = new FuegoMobGeneral({
        nombre: "Berenice",
        calidad: 4,
        nivel: 40,
        vida: 10875,
        ataque: 703,
        defensa: 549,
        velocidad: 105,
        precision: 25,
    })
    const lariel = new AguaMobGeneral({
        nombre: "Lariel",
        calidad: 4,
        nivel: 40,
        vida: 9885,
        ataque: 790,
        defensa: 527,
        velocidad: 105,
        precision: 25
    })
    const cordelia = new VientoMobGeneral({
        nombre: "Cordelia",
        calidad: 4,
        nivel: 40,
        vida: 9720,
        ataque: 758,
        defensa: 571,
        velocidad: 105,
        tasaCritica: 30
    })
    const leah = new LuzMobGeneral({
        nombre: "Leah",
        calidad: 4,
        nivel: 40,
        vida: 10050,
        ataque: 769,
        defensa: 538,
        velocidad: 120,
    })
    const vereesa = new OscuridadMobGeneral({
        nombre: "Vereesa",
        calidad: 4,
        nivel: 40,
        vida: 10215,
        ataque: 692,
        defensa: 604,
        velocidad: 105,
        precision: 25
    })
    return new MobFamily(berenice, lariel, cordelia, leah, vereesa);
}

function asesinas() {
    const lexy = new FuegoMobGeneral({
        nombre: "Lexy",
        calidad: 4,
        nivel: 40,
        vida: 8895,
        ataque: 801,
        defensa: 582,
        velocidad: 117,
    })
    const stella = new AguaMobGeneral({
        nombre: "Stella",
        calidad: 4,
        nivel: 40,
        vida: 10545,
        ataque: 790,
        defensa: 483,
        velocidad: 102,
        precision: 25
    })
    const tanya = new VientoMobGeneral({
        nombre: "Tanya",
        calidad: 4,
        nivel: 40,
        vida: 747,
        ataque: 747,
        defensa: 604,
        velocidad: 102,
        tasaCritica: 30
    })
    const natalie = new LuzMobGeneral({
        nombre: "Natalie",
        calidad: 4,
        nivel: 40,
        vida: 9225,
        ataque: 845,
        defensa: 516,
        velocidad: 102,
    })
    const isabelle = new OscuridadMobGeneral({
        nombre: "Isabelle",
        calidad: 4,
        nivel: 40,
        vida: 9390,
        ataque: 823,
        defensa: 527,
        velocidad: 102,
        tasaCritica: 30,
    })
    return new MobFamily(lexy, stella, tanya, natalie, isabelle);
}

function sirenas() {
    const platy = new FuegoMobGeneral({
        nombre: "Platy",
        calidad: 4,
        nivel: 40,
        vida: 11205,
        ataque: 604,
        defensa: 626,
        velocidad: 95
    })
    const tetra = new AguaMobGeneral({
        nombre: "Tetra",
        calidad: 4,
        nivel: 40,
        vida: 10545,
        ataque: 582,
        defensa: 692,
        velocidad: 110,
    })
    const cichild = new VientoMobGeneral({
        nombre: "Cichild",
        calidad: 4,
        nivel: 40,
        vida: 11535,
        ataque: 648,
        defensa: 560,
        velocidad: 110,
        tasaCritica: 30
    })
    const molly = new LuzMobGeneral({
        nombre: "Molly",
        calidad: 4,
        nivel: 40,
        vida: 11205,
        ataque: 494,
        defensa: 736,
        velocidad: 95,
        resistencia: 40
    })
    const betta = new OscuridadMobGeneral({
        nombre: "Betta",
        calidad: 4,
        nivel: 40,
        vida: 11205,
        ataque: 516,
        defensa: 714,
        velocidad: 110,
    })
    return new MobFamily(platy, tetra, cichild, molly, betta);
}

function damasMagicas() {
    const astar = new FuegoMobGeneral({
        nombre: "Astar",
        calidad: 4,
        nivel: 40,
        vida: 8895,
        ataque: 834,
        defensa: 549,
        velocidad: 105,
    })
    const lapis = new AguaMobGeneral({
        nombre: "Lapis",
        calidad: 4,
        nivel: 40,
        vida: 9885,
        ataque: 736,
        defensa: 582,
        velocidad: 90,
    })
    const lupinus = new VientoMobGeneral({
        nombre: "Lupinus",
        calidad: 4,
        nivel: 40,
        vida: 10875,
        ataque: 670,
        defensa: 582,
        velocidad: 90,
    })
    const iris = new LuzMobGeneral({
        nombre: "Iris",
        calidad: 4,
        nivel: 40,
        vida: 9885,
        ataque: 790,
        defensa: 527,
        velocidad: 105,
    })
    const lanett = new OscuridadMobGeneral({
        nombre: "Lanett",
        calidad: 4,
        nivel: 40,
        vida: 10050,
        ataque: 615,
        defensa: 692,
        velocidad: 90,

    })
    return new MobFamily(astar, lapis, lupinus, iris, lanett);
}

function succubus() {
    const akia = new FuegoMobGeneral({
        nombre: "Akia",
        calidad: 4,
        nivel: 40,
        vida: 10380,
        ataque: 758,
        defensa: 527,
        velocidad: 106,
    })
    const izaria = new AguaMobGeneral({
        nombre: "Izaria",
        calidad: 4,
        nivel: 40,
        vida: 10050,
        ataque: 747,
        defensa: 560,
        velocidad: 106,
    })
    const selena = new VientoMobGeneral({
        nombre: "Selena",
        calidad: 4,
        nivel: 40,
        vida: 9555,
        ataque: 790,
        defensa: 549,
        velocidad: 106,
    })
    const aria = new LuzMobGeneral({
        nombre: "Aria",
        calidad: 4,
        nivel: 40,
        vida: 9390,
        ataque: 747,
        defensa: 604,
        velocidad: 106,
    })
    const isael = new OscuridadMobGeneral({
        nombre: "Isael",
        calidad: 4,
        nivel: 40,
        vida: 9885,
        ataque: 769,
        defensa: 549,
        velocidad: 106,
    })
    return new MobFamily(akia, izaria, selena, aria, isael);
}

const bailarinaDeEspadas = bailarinasDeEspadas();
const asesina = asesinas();
const sirena = sirenas();
const damaMagica = damasMagicas();
const succubo = succubus();

export const nat4List = [bailarinaDeEspadas, asesina, sirena, damaMagica, succubo]
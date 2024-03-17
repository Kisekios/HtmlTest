import { FuegoMobGeneral, AguaMobGeneral, VientoMobGeneral, LuzMobGeneral, OscuridadMobGeneral } from "../classMobGeneral.js"
import { MobFamily } from "./classMobFamily.js"

// cSpell: disable

function amazonas() {
    const ceres = new FuegoMobGeneral({
        nombre: "Ceres",
        calidad: 3,
        nivel: 40,
        vida: 10050,
        ataque: 801,
        defensa: 340,
        velocidad: 102,
    })
    const ellin = new AguaMobGeneral({
        nombre: "Ellin",
        calidad: 3,
        nivel: 40,
        vida: 9060,
        ataque: 823,
        defensa: 384,
        velocidad: 102,
    })
    const hina = new VientoMobGeneral({
        nombre: "Hina",
        calidad: 3,
        nivel: 40,
        vida: 9225,
        ataque: 845,
        defensa: 351,
        velocidad: 102,
    })
    const lyn = new LuzMobGeneral({
        nombre: "Lyn",
        calidad: 3,
        nivel: 40,
        vida: 10380,
        ataque: 790,
        defensa: 329,
        velocidad: 102,
    })
    const mara = new OscuridadMobGeneral({
        nombre: "Mara",
        calidad: 3,
        nivel: 40,
        vida: 7740,
        ataque: 911,
        defensa: 384,
        velocidad: 102,
    })
    return new MobFamily(ceres, ellin, hina, lyn, mara);
}

function brujasMisticas() {
    const rebecca = new FuegoMobGeneral({
        nombre: "Rebecca",
        calidad: 3,
        nivel: 40,
        vida: 9555,
        ataque: 626,
        defensa: 549,
        velocidad: 97,
    })
    const megan = new AguaMobGeneral({
        nombre: "Megan",
        calidad: 3,
        nivel: 40,
        vida: 9885,
        ataque: 582,
        defensa: 571,
        velocidad: 97,
    })
    const silia = new VientoMobGeneral({
        nombre: "Silia",
        calidad: 3,
        nivel: 40,
        vida: 9060,
        ataque: 681,
        defensa: 527,
        velocidad: 97,
    })
    const linda = new LuzMobGeneral({
        nombre: "Linda",
        calidad: 3,
        nivel: 40,
        vida: 8895,
        ataque: 714,
        defensa: 505,
        velocidad: 97,
    })
    const gina = new OscuridadMobGeneral({
        nombre: "Gina",
        calidad: 3,
        nivel: 40,
        vida: 9555,
        ataque: 692,
        defensa: 483,
        velocidad: 97,
    })
    return new MobFamily(rebecca, megan, silia, linda, gina);
}

function gatasMarciales() {
    const mei = new FuegoMobGeneral({
        nombre: "Mei",
        calidad: 3,
        nivel: 40,
        vida: 10380,
        ataque: 626,
        defensa: 494,
        velocidad: 104,
        resistencia: 40
    })
    const mina = new AguaMobGeneral({
        nombre: "Mina",
        calidad: 3,
        nivel: 40,
        vida: 7905,
        ataque: 790,
        defensa: 494,
        velocidad: 119,
    })
    const naomi = new VientoMobGeneral({
        nombre: "Naomi",
        calidad: 3,
        nivel: 40,
        vida: 8895,
        ataque: 681,
        defensa: 538,
        velocidad: 119,
    })
    const xiaoLing = new LuzMobGeneral({
        nombre: "Xiao Ling",
        calidad: 3,
        nivel: 40,
        vida: 11205,
        ataque: 604,
        defensa: 461,
        velocidad: 106,
        resistencia: 40
    })
    const miho = new OscuridadMobGeneral({
        nombre: "Miho",
        calidad: 3,
        nivel: 40,
        vida: 9060,
        ataque: 703,
        defensa: 505,
        velocidad: 119,
    })
    return new MobFamily(mei, mina, naomi, xiaoLing, miho);
}

function cowGirls() {
    const anne = new FuegoMobGeneral({
        nombre: "Anne",
        calidad: 3,
        nivel: 40,
        vida: 8895,
        ataque: 703,
        defensa: 516,
        velocidad: 102,
        precision: 25
    })
    const sera = new AguaMobGeneral({
        nombre: "Sera",
        calidad: 3,
        nivel: 40,
        vida: 8400,
        ataque: 747,
        defensa: 505,
        velocidad: 102,
        tasaCritica: 30
    })
    const hannah = new VientoMobGeneral({
        nombre: "Hannah",
        calidad: 3,
        nivel: 40,
        vida: 8400,
        ataque: 725,
        defensa: 527,
        velocidad: 117,
    })
    const loren = new LuzMobGeneral({
        nombre: "Loren",
        calidad: 3,
        nivel: 40,
        vida: 9225,
        ataque: 681,
        defensa: 516,
        velocidad: 102,
        precision: 25
    })
    const cassie = new OscuridadMobGeneral({
        nombre: "Cassie",
        calidad: 3,
        nivel: 40,
        vida: 8565,
        ataque: 769,
        defensa: 472,
        velocidad: 102,
        tasaCritica: 30
    })
    return new MobFamily(anne,sera,hannah,loren,cassie);
}

function highElementals() {
    const kahli = new FuegoMobGeneral({
        nombre: "Kahli",
        calidad: 3,
        nivel: 40,
        vida: 6255,
        ataque: 878,
        defensa: 519,
        velocidad: 102,
    })
    const ellena = new AguaMobGeneral({
        nombre: "Ellena",
        calidad: 3,
        nivel: 40,
        vida: 5925,
        ataque: 812,
        defensa: 604,
        velocidad: 103,
    })
    const moria = new VientoMobGeneral({
        nombre: "Moria",
        calidad: 3,
        nivel: 40,
        vida: 5595,
        ataque: 933,
        defensa: 505,
        velocidad: 105,
    })
    const shren = new LuzMobGeneral({
        nombre: "Shren",
        calidad: 3,
        nivel: 40,
        vida: 10380,
        ataque: 725,
        defensa: 395,
        velocidad: 104,
    })
    const jumaline = new OscuridadMobGeneral({
        nombre: "jumaline",
        calidad: 3,
        nivel: 40,
        vida: 7245,
        ataque: 867,
        defensa: 461,
        velocidad: 104,
    })
    return new MobFamily(kahli,ellena,moria,shren,jumaline);
}

const amazona = amazonas();
const brujaMistica = brujasMisticas();
const gataMarcial = gatasMarciales();
const cowGirl = cowGirls();
const highElemental = highElementals();

export const nat3List = [amazona, brujaMistica, gataMarcial, cowGirl, highElemental]
import { FuegoMobGeneral, AguaMobGeneral, VientoMobGeneral, LuzMobGeneral, OscuridadMobGeneral } from "../classMobGeneral.js"
import { MobFamily } from "./classMobFamily.js"

// cSpell: disable

function doncellasDemonio() {
    const bloodya = new FuegoMobGeneral({
        nombre: "Bloodya",
        nivel: 40,
        vida: 10050,
        ataque: 845,
        defensa: 626,
        velocidad: 101,
        tasaCritica: 30
    })
    const irene = new AguaMobGeneral({
        nombre: "Irene",
        nivel: 40,
        vida: 11850,
        ataque: 736,
        defensa: 615,
        velocidad: 101,
        resistencia: 40
    }
    )
    const layla = new VientoMobGeneral({
        nombre: "Layla",
        nivel: 40,
        vida: 10875,
        ataque: 801,
        defensa: 615,
        velocidad: 101,
        precision: 25
    })
    const jessica = new LuzMobGeneral({
        nombre: "Jessica",
        nivel: 40,
        vida: 10050,
        ataque: 725,
        defensa: 747,
        velocidad: 101,
        precision: 25
    }
    )
    const liliana = new OscuridadMobGeneral({
        nombre: "Liliana",
        nivel: 40,
        vida: 10710,
        ataque: 878,
        defensa: 549,
        velocidad: 101,
        tasaCritica: 30
    })
    return new MobFamily(bloodya, irene, layla, jessica, liliana);
}

function señorasDelInfierno() {
    const raki = new FuegoMobGeneral({
        nombre: "Raki",
        nivel: 40,
        vida: 10050,
        ataque: 856,
        defensa: 615,
        velocidad: 104,
        tasaCritica: 30
    })
    const beth = new AguaMobGeneral({
        nombre: "Beth",
        nivel: 40,
        vida: 10215,
        ataque: 834,
        defensa: 626,
        velocidad: 104,
        precision: 25
    })
    const ethna = new VientoMobGeneral({
        nombre: "Ethna",
        nivel: 40,
        vida: 10380,
        ataque: 845,
        defensa: 604,
        velocidad: 119,
    })
    const asima = new LuzMobGeneral({
        nombre: "Asima",
        nivel: 40,
        vida: 10710,
        ataque: 812,
        defensa: 615,
        velocidad: 104,
        precision: 25
    })
    const craka = new OscuridadMobGeneral({
        nombre: "Craka",
        nivel: 40,
        vida: 11535,
        ataque: 769,
        defensa: 604,
        velocidad: 104,
    })
    return new MobFamily(raki, beth, ethna, asima, craka);
}

function chicasOcultas() {
    const rica = new FuegoMobGeneral({
        nombre: "Rica",
        nivel: 40,
        vida: 10215,
        ataque: 823,
        defensa: 637,
        velocidad: 105,
        precision: 25
    })
    const anavel = new AguaMobGeneral({
        nombre: "Anavel",
        nivel: 40,
        vida: 10710,
        ataque: 769,
        defensa: 659,
        velocidad: 105,
        resistencia: 40
    })
    const charlotte = new VientoMobGeneral({
        nombre: "Charlotte",
        nivel: 40,
        vida: 10380,
        ataque: 845,
        defensa: 604,
        velocidad: 105,
        precision: 25
    })
    const lora = new LuzMobGeneral({
        nombre: "Lora",
        nivel: 40,
        vida: 11850,
        ataque: 692,
        defensa: 659,
        velocidad: 120,
    })
    const nicki = new OscuridadMobGeneral({
        nombre: "Nicki",
        nivel: 40,
        vida: 10215,
        ataque: 812,
        defensa: 648,
        velocidad: 105,
        resistencia: 40
    })
    return new MobFamily(rica, anavel, charlotte, lora, nicki);
}

function onmyoujis() {
    const tomoe = new FuegoMobGeneral({
        nombre: "Tomoe",
        nivel: 40,
        vida: 11535,
        ataque: 615,
        defensa: 758,
        velocidad: 103,
    })
    const shizuka = new AguaMobGeneral({
        nombre: "Shizuka",
        nivel: 40,
        vida: 11040,
        ataque: 659,
        defensa: 747,
        velocidad: 103,
    })
    const giou = new VientoMobGeneral({
        nombre: "Giou",
        nivel: 40,
        vida: 11205,
        ataque: 626,
        defensa: 769,
        velocidad: 103,
    })
    const seimei = new LuzMobGeneral({
        nombre: "Seimei",
        nivel: 40,
        vida: 11370,
        ataque: 648,
        defensa: 736,
        velocidad: 103,
        precision: 25
    })
    const douman = new OscuridadMobGeneral({
        nombre: "Douman",
        nivel: 40,
        vida: 12180,
        ataque: 604,
        defensa: 725,
        velocidad: 103,
        precision: 25
    })
    return new MobFamily(tomoe, shizuka, giou, seimei, douman);
}

function reinasDelDesierto() {
    const sekhmet = new FuegoMobGeneral({
        nombre: "Sekhmet",
        nivel: 40,
        vida: 11205,
        ataque: 714,
        defensa: 681,
        velocidad: 114,
    })
    const bastet = new AguaMobGeneral({
        nombre: "Bastet",
        nivel: 40,
        vida: 11850,
        ataque: 637,
        defensa: 714,
        velocidad: 99,
        resistencia: 40
    })
    const hathor = new VientoMobGeneral({
        nombre: "Hathor",
        nivel: 40,
        vida: 11040,
        ataque: 692,
        defensa: 714,
        velocidad: 99,
        precision: 25
    })
    const isis = new LuzMobGeneral({
        nombre: "Isis",
        nivel: 40,
        vida: 11700,
        ataque: 637,
        defensa: 725,
        velocidad: 99,
        precision: 25
    })
    const nephthys = new OscuridadMobGeneral({
        nombre: "Nephthys",
        nivel: 40,
        vida: 11370,
        ataque: 725,
        defensa: 659,
        velocidad: 99,
        resistencia: 40
    })
    return new MobFamily(sekhmet, bastet, hathor, isis, nephthys);
}

export const doncellaDemonio = doncellasDemonio();
export const señoraDelInfierno = señorasDelInfierno();
export const chicaOculta = chicasOcultas();
export const onmyouji = onmyoujis();
export const reinaDelDesierto = reinasDelDesierto();
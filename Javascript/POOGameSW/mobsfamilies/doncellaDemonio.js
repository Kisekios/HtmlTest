import { FuegoMobGeneral, AguaMobGeneral, VientoMobGeneral, LuzMobGeneral, OscuridadMobGeneral } from "../classMobGeneral.js"
import { MobFamily } from "./classMobFamily.js"


const bloodya = new FuegoMobGeneral({
    nombre : "Bloodya",
    nivel : 40,
    vida : 10050,
    ataque : 845,
    defensa : 626,
    velocidad : 101,
    tasaCritica : 30
}
)
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
}
)
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
}
)

export const doncellaDemonio = new MobFamily(bloodya,irene,layla,jessica,liliana)
class MobGeneral {
    constructor({
        nombre = string,
        calidad = number,
        nivel = 1,
        vida = number,
        ataque = number,
        defensa = number,
        velocidad = number,
        tasaCritica = 15,
        critico = 50,
        resistencia = 15,
        precision = 0

    }) {
        this.nombre = nombre;
        this.calidad = calidad;
        this.nivel = nivel;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.tasaCritica = tasaCritica;
        this.critico = critico;
        this.resistencia = resistencia;
        this.precision = precision;
        this.sigueVivo = true;
    }

    atacar(enemigo, userMob) {
        const dañoEfectivo = this.ataque - enemigo.defensa;
        enemigo.checkPuntosDeVida(dañoEfectivo);
        userMob.atributoCounter = enemigo.atributo ? this.tasaCritica += 15 : this.tasaCritica;
    }

    checkPuntosDeVida(dañoRecibido) {
        dañoRecibido <= 0 ? this.vida : this.vida - dañoRecibido;
        if (this.vida <= 0) {
            this.sigueVivo = false;
        }
    }
}

export class FuegoMobGeneral extends MobGeneral {
    constructor(propiedades) {
        super(propiedades)
        this.atributo = "Fuego";
        this.atributoCounter = "Agua"
    }
}
export class AguaMobGeneral extends MobGeneral {
    constructor(propiedades) {
        super(propiedades)
        this.atributo = "Agua";
        this.atributoCounter = "Viento"
    }
}
export class VientoMobGeneral extends MobGeneral {
    constructor(propiedades) {
        super(propiedades)
        this.atributo = "Viento";
        this.atributoCounter = "Fuego"
    }
}
export class LuzMobGeneral extends MobGeneral {
    constructor(propiedades) {
        super(propiedades)
        this.atributo = "Luz";
        this.atributoCounter = "Oscuridad"
    }
}
export class OscuridadMobGeneral extends MobGeneral {
    constructor(propiedades) {
        super(propiedades)
        this.atributo = "Oscuridad";
        this.atributoCounter = "Luz"
    }
}

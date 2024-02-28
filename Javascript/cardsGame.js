const imprimirCartasJugador = document.querySelector(".cartas-jugador");
const pedirCarta = document.querySelector("button")

pedirCarta.addEventListener('click', repartirCartas)

let mazo = [];
let cartasJugador = [];
let valorCartasJugador = 0;
let totalCartasEnMano = 0;

function Cartas(numero, color, simbolo) {
    this.numero = numero;
    this.color = color;
    this.simbolo = simbolo;
}

function nuevoMazo() {

    if (mazo.length <= 52) {
        let simboloCartas;
        let colorCartas;
        for (let i = 0; i < 4; i++) {
            if (i == 0) {
                simboloCartas = "Corazones";
                colorCartas = "Rojo";
            } else if (i == 1) {
                simboloCartas = "Diamantes";
                colorCartas = "Rojo";
            } else if (i == 2) {
                simboloCartas = "Picas";
                colorCartas = "Negro";
            } else if (i == 3) {
                simboloCartas = "Treboles";
                colorCartas = "Negro";
            }

            for (let j = 1; j <= 13; j++) {
                let carta = new Cartas(j, colorCartas, simboloCartas);
                mazo.push(carta);
            }
        }
    }
}

function repartirCartas() {
    let cartaElegida = Math.floor(Math.random() * (mazo.length - 0 + 1)) + 0;
    cartasEnMano(mazo.splice(cartaElegida, 1));
}

function cartasEnMano(carta) {
    cartasJugador.push(carta);
    let numeroCarta = cartasJugador[totalCartasEnMano][0].numero
    valorCartasJugador += numeroCarta;
    renderCartasJugador();
}

function renderCartasJugador() {
    const carta = document.createElement('div');
    carta.classList.add('cart');

    const numeroCarta = document.createElement('p');
    numeroCarta.innerText = cartasJugador[totalCartasEnMano][0].numero;

    const colorCarta = document.createElement('p');
    colorCarta.innerText = cartasJugador[totalCartasEnMano][0].color;

    const simboloCarta = document.createElement('p');
    simboloCarta.innerText = cartasJugador[totalCartasEnMano][0].simbolo;


    carta.appendChild(numeroCarta)
    carta.appendChild(colorCarta)
    carta.appendChild(simboloCarta)
    imprimirCartasJugador.appendChild(carta)
    totalCartasEnMano += 1;
    if (valorCartasJugador > 21) {
        alert('Perdiste')
    }
}

nuevoMazo();



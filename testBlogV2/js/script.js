/* Llamadas al HTML */


const containerSongs = document.querySelector('.container-music');
const playSong = document.querySelector('.play-pause-btn');
const volumenBtn = document.querySelector('.volumen');
const songs = document.getElementsByClassName('song');
const barIcon = document.createElement('span');


/* Variables globales */


const songList = [];
let audio;
let reproduciendoSong = false;
let cancion;


/* Acciones/Funciones de inserción al HTML */


barIcon.classList.add('material-icons');
barIcon.id = 'icon';
playSong.appendChild(barIcon)

function playOrPause() { //Cambio de botón en el html
    if (cancion === undefined || reproduciendoSong === false) {
        const cambio = document.getElementById('icon')
        cambio.textContent = 'play_circle'
    } else {
        const cambio = document.getElementById('icon')
        cambio.textContent = 'pause_circle'
    }
}

function renderSongs(arreglo) {
    for (putSong of arreglo) {
        const nameSong = document.createElement('div');
        nameSong.classList.add('song');
        nameSong.setAttribute('id', putSong);

        const imagenSong = document.createElement('img');
        imagenSong.src = "./imagenes/daki.jpg";
        nameSong.appendChild(imagenSong);

        const PTextName = document.createElement('p');
        PTextName.innerText = putSong;
        nameSong.appendChild(PTextName);
        containerSongs.appendChild(nameSong);
    }
}


/* Funciones de reproducción/pausa/volumen */


function reproducirSong() {
    for (elemento of songs) {
        elemento.addEventListener('click', function () {
            cancion = this.getAttribute('id');
            playing(cancion);
        })
    }
}

function playing(cancion) {
    if (reproduciendoSong === false) {
        audio = new Audio(`./musica/${cancion}.mp3`);
        audio.play()
        reproduciendoSong = true;
        playOrPause();
    } else {
        audio.pause();
        reproduciendoSong = false;
        playing(cancion);
    }
}

function pausebtn() {
    audio.pause();
    reproduciendoSong = false;
    playOrPause();
}

volumenBtn.addEventListener('click', function () {
    let vol = this.value;
    audio.volume = vol;
})

playSong.addEventListener('click', function () {
    if (cancion !== undefined) {
        if (reproduciendoSong === false) {
            playing(cancion)
        } else { pausebtn() }
    } else { console.log('No se ha seleccionado una cancion') }
})


/* Lista de canciones */


songList.push('Vonikk Phoenix')
songList.push('Vonikk Adrenalize')
songList.push('Vonikk Nova')
songList.push('Vonikk Submarin')
songList.push('Vonikk Supersta')


/* Llamadas a funciones */


renderSongs(songList);
reproducirSong();
playOrPause();

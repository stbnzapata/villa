// for(let i = 0; i < 10; i++) {
//     let z = aleatorio(10, 100)
//     document.write(z + '<br/>')
// } 

let villaPlatzi = document.getElementById('villaPlatzi');
let lienzo = villaPlatzi.getContext('2d');

let fondo = {
    url: '../img/tile.png',
    cargaOk: false
};

let vaca = {
    url: '../img/vaca.png',
    cargaOk: false
};

let cerdo = {
    url: '../img/cerdo.png',
    cargaOk: false
};

let pollo = {
    url: '../img/pollo.png',
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollo);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOk = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOk) {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk) {
        lienzo.drawImage(vaca.imagen, 100, 100);
    }
    if (cerdo.cargaOk) {
        lienzo.drawImage(cerdo.imagen, 200, 200);
    }
    if (pollo.cargaOk) {
        lienzo.drawImage(pollo.imagen, 300, 300);
    }
}

function aleatorio(min, max) {
    let result = Math.floor((Math.random() * (max - min + 1))) + min;
    return (result);
}

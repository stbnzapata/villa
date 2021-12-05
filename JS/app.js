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

let cantidadVacas = aleatorio(0, 3);
let cantidadCerdos = aleatorio(0, 3);
let cantidadPollos = aleatorio(0, 3); 

function dibujar() {
    if (fondo.cargaOk) 
    {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOk) 
    {
        for(let v = 0; v < cantidadVacas; v++)
        {   
            let x = aleatorio(0, 5);
            let y = aleatorio(0, 5);
            x = x * 80;
            y = y * 80;
            lienzo.drawImage(vaca.imagen, x, y);
        }
    }

    if (cerdo.cargaOk) 
    {
        for(let c = 0; c < cantidadCerdos; c++)
        {   
            let x = aleatorio(0, 5)
            let y = aleatorio(0, 5)
            x = x * 80;
            y = y * 80;
            lienzo.drawImage(cerdo.imagen, x, y);
        }        
    }

    if (pollo.cargaOk) 
    {
        for(let p = 0; p < cantidadPollos; p++)
        {   
            let x = aleatorio(0, 5)
            let y = aleatorio(0, 5)
            x = x * 80;
            y = y * 80;
            lienzo.drawImage(pollo.imagen, x, y);
        }         
    }
}

function aleatorio(min, max) {
    let result = Math.floor((Math.random() * (max - min + 1))) + min;
    return (result);
}

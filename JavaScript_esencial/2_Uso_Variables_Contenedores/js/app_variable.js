'use strict'

// var se usa para variables globales

var nombre = 'Donaldo';

console.log(nombre)

// let se usa para variables locales en una función

function saludo(){
    let nombre = 'yabksjns';
    console.log(nombre)

    let edad = 34;
    console.log(edad)
}

// La siguiente línea va a generar un error
    console.log(edad)

saludo();
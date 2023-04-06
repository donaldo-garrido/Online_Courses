'use strict'

// JSON => JavaScrip Object Notation

var persona = {nombre: 'Donaldo', twitter: 'ahvgsh'};

// podemos definir un arreglo con más entradas
// Si agrego la variable 'persona' definida arriba, también se agrega.
var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

// convertimos el json a string
var personaJSON = JSON.stringify(persona);

// para convertir a JSON
var nuevaPersona = JSON.parse(personaJSON)
'use strict'


var datoA = 10;
var datoB = 10;
var resultado = 'Sin datos';


if (datoA > datoB){
    resultado = 'La condición se cumplió';
} else if (datoA == datoB){
    resultado = 'Segunda evaluación verdadera';
} else {
    resultado = 'No se cumplió ninguna evaluación';
}

console.log('El resultado de la evaluación if es: ', resultado);
'use strict'

// Cada simbolo es diferente
// Si comparamos el 1 con el 2 nos dará datos totalmente diferentes.
var simbolo1 = Symbol();
var simbolo2 = Symbol();


// podemos usarlo para ver si estamos en QA o PROD
var ambiente = Symbol('dev');
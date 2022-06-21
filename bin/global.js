#!/usr/bin/env node 
// Establecemos que este elemento se va a ejecutar dentro del sistema bash 

let random = require('../src/index.js'); // requerimos lo creado dentro del paquete 

random.randomMsg(); // invocamos el modulo importado 
const messages = [
    "Jaime",
    "Sofia",
    "Alejandra",
    "Diego",
    "Karen",
    "Caroline",
    "Nicolas"
];

const randomMsg = () => { // Arrow function anonima guardada en la constante
    const message = messages[Math.floor(Math.random() * messages.length)]; // Math.floor regresa el primer valor redondeado de Math.random, que regresa un valor aleatorio entre el numero de elementos del array
    console.log(message); // mostramos la posicion del array obtenida por medio de los metodos
};

module.exports = { randomMsg }; // Exportamos la funcion como un modulo 
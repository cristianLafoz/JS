//Habilitado el modo estricto en JavaScript
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

//Congela el objeto, no se puede borrar, añadir ni modificar el objeto
Object.freeze(producto);

//Para saber si un objeto esta congelado
console.log(Object.isFrozen(producto));


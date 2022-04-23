//Habilitado el modo estricto en JavaScript
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

//Sellar el objeto, no se pueden agregar ni eliminar caracteristicas del objeto pero si modificar.
Object.seal(producto);

//Para saber si un objeto esta sellado
console.log(Object.isSealed(producto));


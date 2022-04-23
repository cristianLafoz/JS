const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Movil',
    precio: 800
}


const producto3 = {
    nombre: 'Teclado',
    precio: 50
}


//Forma declarativa
let resultado ;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

console.table(resultado);
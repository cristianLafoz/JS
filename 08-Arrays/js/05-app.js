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

//Agregar al final del arreglo
carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//Agregar al principio del arreglo
carrito.unshift(producto3);

console.table(carrito);
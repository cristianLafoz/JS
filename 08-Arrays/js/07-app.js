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

const producto4 = {
    nombre: 'Raton',
    precio: 80
}

//Agregar al final del arreglo
carrito.push(producto);
carrito.push(producto2);

//Agregar al principio del arreglo
carrito.unshift(producto3);
console.table(carrito);

//Eliminar el último elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

//Eliminar un elemento del carrito cualquiera
//1º Valor, el indice desde el que comenzará a borrar
//2º Valor, la cantidad de elementos a borrar
carrito.splice(1,1);
console.table(carrito);
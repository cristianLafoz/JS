
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200, descuento: true},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Movil", precio: 700},
    {nombre: "Teclado", precio: 400},
]

for( let pendiente of pendientes){
    console.log(pendiente);
}


for (let producto of carrito){
    console.log(producto.nombre);
}
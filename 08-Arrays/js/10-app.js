const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Movil", precio: 700},
    {nombre: "Teclado", precio: 400},
]


//Sirve para recorreo un array
carrito.forEach(producto =>{
    console.log(`${producto.nombre} - ${producto.precio}`);
});

//Crea una variable con los datos del array como si fuera un segundo array

const carrito2 = carrito.map(producto =>{
    return `${producto.nombre} - ${producto.precio}`;
});

console.log(carrito2);
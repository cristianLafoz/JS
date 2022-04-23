const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Movil", precio: 700},
    {nombre: "Teclado", precio: 400},
]


const nuevoArreglo = carrito.forEach( producto =>console.log(`${producto.nombre} - ${producto.precio}`));


const nuevoArreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`)
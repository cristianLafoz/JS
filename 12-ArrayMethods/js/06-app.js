const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//Todos los elementos tienen que cumplir la condición
const resultado = carrito.every( producto => producto.precio <500);
console.log(resultado);

//Al menos un elemento tiene que cumplir con la condición
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2);
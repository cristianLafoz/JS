const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}


console.log(producto.nombre);

const nombre1 = producto.nombre;
console.log(nombre1);



//Destructuring
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);
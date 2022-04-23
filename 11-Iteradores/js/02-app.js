/*
for(let i = 0; i<10; i++){
    console.log(i);

    if(i == 5){
        console.log("Cinco");
        continue;
    }

}
*/

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200, descuento: true},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Movil", precio: 700},
    {nombre: "Teclado", precio: 400},
]

for(let i = 0; i<carrito.length; i++){
    console.log(carrito[i])
    if(carrito[i].descuento == true){
        console.log(`El articulo ${carrito[i].nombre} tiene un descuento`);
        continue;
    }
}
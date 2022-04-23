const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

//Agregar nueveas propiedades
producto.imagen = "imagen.jpg";

//Eliminar un elemento del objeto
delete producto.disponible;


console.log(producto);

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    informacion : {
        medidas : {
            peso: "1Kg",
            medida: "1M",
        },
        fabricacion : {
            pais : "China"
        }
        
    }

    
}



const {nombre, informacion, informacion: {fabricacion}, informacion: {fabricacion: {pais}}} = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);

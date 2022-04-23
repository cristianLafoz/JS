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


console.log(producto);

console.log(producto.informacion.fabricacion.pais);
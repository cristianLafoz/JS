const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

const medidas = {
    peso: "1 Kg",
    medida: "1 Metro",
}

//Unir dos objetos diferentes
const resultado = Object.assign(producto, medidas);

console.log(resultado);

//Spread Operatos o Rest Operator, otra manera de unir objetos
const resultado2 = { ...producto, ...medidas}

console.log(resultado2);
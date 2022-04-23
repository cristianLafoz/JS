const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);


//Cuando mide el arreglo
console.log(meses.length);

//Bucle for para iterar en todos los elementos de un array
for(let i = 0;i<meses.length; i++){
    console.log(meses[i])
}

//Bucle forEach para iterar en cada elemento de un array
meses.forEach(mes => {
    console.log(mes);
});
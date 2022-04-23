const producto = "Monitor 20 pulgadas";

//Reemplazar cadena de strings por otra
console.log(producto.replace("pulgadas", '"').replace("Monitor", "Monitor curvo"));

//.slice para cortar
console.log(producto.slice(0,10));

//Alternativa a slice
console.log(producto.substring(10,9));

//La diferencia reside en que .slice no puede cortar la cadena si el primer valor es menor que el segundo
//.substring() si que puede, intercambia los valores para que el valor mas pequeño este en primer lugar



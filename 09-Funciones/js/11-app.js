const aprendiendo = function(){
    console.log("Aprendiendo JS");
}

//Si tiene un único parámetro el paréntesis es opcional
const aprendiendo2 =tecnologia => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo2("JS"));


//Si tiene mas de un parámetro el paréntesis es obligatorio
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo3("JS", "PHP"));
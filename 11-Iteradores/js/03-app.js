//Fizz Buzz

//3 - Fizz
//5 - Buzz
//3 y 5 - Fizz Buzz

for(let i = 1; i<=100; i++){
    if(i % 15 == 0){
        console.log(`Nº ${i} - Fizz Buzz`);
        continue;
    } else if(i % 5 == 0){
        console.log(`Nº ${i} - Buzz`);
        continue;
    } else if(i %3 ==0){
        console.log(`Nº ${i} - Fizz`);
    } else {
        console.log(`Nº ${i} - NADA`);
    }
}
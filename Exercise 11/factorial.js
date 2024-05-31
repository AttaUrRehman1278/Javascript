const prompt = require("prompt-sync")();

let a = parseInt(prompt('Enter a number: '));

/* Finding factorial using recursion method

// function factorial(x){
//     if(x == 0 || x == 1){
//         return 1;
//     }
//     else{
//         return x * factorial(x-1);
//     }
// }
// console.log(factorial(a))

*/

/* FInding factorial using for loop

let fact = a;
for (let i = a; i > 0; i--){
    if(i == 1){
        fact = fact * 1;
    }
    else{
        fact = fact * (i - 1);
    }
}
console.log(fact)

*/

/* Finding factorial using reduce method

*/
// let a = 8;
function factorial(number){
    let arr = Array.from(Array(number + 1).keys());
    let z = arr.slice(1,).reduce((x , y)=> x * y)
    return z
}
console.log(factorial(a));

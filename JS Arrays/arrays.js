// const prompt = require("prompt-sync")();
// let a = [];
// do {
//     var b = parseInt(prompt("Enter a number: "))
//     a.push(b)
// } while(b != 0);
// console.log(a)

let a = [1, 3, 5, 4];
b = a.map(x =>{
    return x ** 2;
})
console.log(b)
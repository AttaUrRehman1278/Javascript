// const prompt = require("prompt-sync")();
// let a = [];
// do {
//     var b = parseInt(prompt("Enter a number: "))
//     a.push(b)
// } while(b != 0);
// console.log(a)

let a = [1, 2, 3, 4, 5];

let b = a.map(e => {
    return e**3
})
console.log(b)
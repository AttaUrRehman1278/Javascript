const prompt = require("prompt-sync")();
let a = [];
do {
    var b = parseInt(prompt("Enter a number: "))
    a.push(b)
} while(b != 0);
console.log(a)
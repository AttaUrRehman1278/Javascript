const prompt = require("prompt-sync")();
let a = Math.random();
console.log(a)
let x = parseInt(prompt("Enter first number: "))
let y = parseInt(prompt("Enter second number: "))

let select_operation = prompt("Select any Operation [+,-,/,*]: ")
let obj = {
    '+':'-',
    '-':'/',
    '*':'+',
    '/':'**'
}
if (a < 0.1) {
    select_operation = obj[select_operation];
    console.log(eval(`${x}${select_operation}${y}`))
}
else {
    console.log(eval(`${x}${select_operation}${y}`))
}
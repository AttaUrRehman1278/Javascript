const prompt = require("prompt-sync")();
let a = Math.random();
console.log(a)
let x = parseInt(prompt("Enter first number: "))
let y = parseInt(prompt("Enter second number: "))

let operations = ['+', '-']
let select_operation = prompt("Operation you want to perform: ")
if (a < 0.1){
    switch(select_operation){
        case '+':
            console.log(x - y);
            break;
            case '-':
                console.log(x + y);
                break;
            }
        }
else{
    switch(select_operation){
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        }
    }
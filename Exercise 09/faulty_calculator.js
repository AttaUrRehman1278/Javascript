const prompt = require("prompt-sync")();
let a = Math.random();
console.log(a)
let x = parseInt(prompt("Enter first number: "))
let y = parseInt(prompt("Enter second number: "))

let select_operation = prompt("Select any Operation [+,-,/,*]: ")
if (a < 0.1) {
    switch (select_operation) {
        case '+':
            console.log(x - y);
            break;
        case '-':
            console.log(x / y);
            break;
        case '*':
            console.log(x + y);
            break;
        case '/':
            console.log(x ** y);
            break;
    }
}
else {
    switch (select_operation) {
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '*':
            console.log(x * y);
            break;
        case '/':
            console.log(x / y);
            break;
    }

}
// const prompt = require("prompt-sync")();
// let a = [];
// do {
//     var b = parseInt(prompt("Enter a number: "))
//     a.push(b)
// } while(b != 0);
// console.log(a)

// let a = [1, 2, 3, 4, 5];

// let b = a.map(e => {
//     return e**3
// })
// console.log(b)


let a = [10, 30, 345, 23, 5];

const divisibleByTen = (e) => {
    if (e % 10 == 0){
        return true;
    }
    return false;
}

console.log(a.filter(divisibleByTen));
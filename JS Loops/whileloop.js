const prompt = require("prompt-sync")();
for(let i = 0; i < 10; i++){
    let a = parseInt(prompt("Enter your number: "));
    if (a != 10){
        console.log("try again");
    }
    else{
        console.log("Bingo");
        break;
    }
}

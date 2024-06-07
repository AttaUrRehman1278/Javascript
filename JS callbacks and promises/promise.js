console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
    let random = Math.random();
    if(random < 0.5){
        reject("This random number is not supported")
    }
    else{

        setTimeout(() => {
            console.log("This is inside promises");
            resolve("Atta Ur Rehman");
        }, 1000);
    }
})

prom1.then((a) => {
    console.log(a)
}).catch((err)=> {
    console.log(err)
});
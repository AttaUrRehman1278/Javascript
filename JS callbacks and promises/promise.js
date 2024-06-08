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

function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = callback("Atta Ur Rehman", fn)
    document.head.append(script)
}
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , (script) =>{
//     alert("script is loaded")
//     alert("script.src")
// })

const fn = ()=>{
    console.log("Nothing!")
}

const callback = (arg, fn) =>{
    console.log(arg)
    fn()
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
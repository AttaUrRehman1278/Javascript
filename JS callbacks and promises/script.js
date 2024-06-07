// console.log("Hey this is Atta");
// console.log("This is myself");

// setTimeout(e => {
//     console.log("Hey this is Atta Ur Rehman")
// }, 0);
// console.log("This is the End of Script")
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
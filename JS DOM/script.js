let a = confirm("Do you want to see prompt?")
if (a == true){

    let age = prompt("Enter your age: ");
    
    if (age > 4){
        // alert("You can drive!")
        // location.href = "https://google.com";
        console.log(typeof(document))
        console.log(typeof(window))

    }
    else if (age < 0){
        console.error("Wrong Input")
    }
    else{
        alert("You are underaged. You can't drive!")
    }
}
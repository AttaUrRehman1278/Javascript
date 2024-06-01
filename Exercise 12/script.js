for(let i = 1; i <= 5; i++){
    let randomNumber = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    let randomNumber1 = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    document.getElementById(`box${i}`).style.color = randomNumber ;
    document.getElementById(`box${i}`).style.backgroundColor = randomNumber1 ;

}


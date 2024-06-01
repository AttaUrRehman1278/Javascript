let randomNumber = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
for(let i = 1; i <= 5; i++){
    document.getElementById(`box${i}`).style.color = randomNumber ;
    document.getElementById(`box${i}`).style.backgroundColor = randomNumber ;
}
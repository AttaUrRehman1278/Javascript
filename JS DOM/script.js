// let a = confirm("Do you want to see prompt?")
// if (a == true){

//     let age = prompt("Enter your age: ");
    
//     if (age > 4){
//         // alert("You can drive!")
//         // location.href = "https://google.com";
//         console.log(typeof(document))
//         console.log(typeof(window))

//     }
//     else if (age < 0){
//         console.error("Wrong Input")
//     }
//     else{
//         alert("You are underaged. You can't drive!")
//     }
// }

// let a = document.body.firstElementChild.firstElementChild;
// a.firstElementChild.style.color = 'blue';

// let ul = document.getElementById('ul');
// ul.firstElementChild.style.background = 'red';
function generateTable(){
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for(let i = 0; i < 2; i++){

        const row = document.createElement("tr");
    
        for(let j = 0; j < 2; j++){

            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);

    document.body.appendChild(tbl);

    tbl.setAttribute("border", "2");
}

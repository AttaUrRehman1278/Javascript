function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${views} views . ${monthsOld} months old </p>
    </div>
</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createCard("Code WIth Harry", "CodeWithHarry", 10000, 3, "31:33", "codeWithHarry.webp")



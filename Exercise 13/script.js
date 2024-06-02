const cards = document.querySelector(".card");
function createCard(title, cName, views, monthsOld, duration, thumbnail){
    var url = "codeWithHarry.webp";
    thumbnail = new Image();
    thumbnail.src = url;
    thumbnail = cards.appendChild(thumbnail);
    title = cards.append("Sigma Web Development | Tutorial # 73");
    cName = cards.append("Code With Harry");
    views = cards.append("20k");
    monthsOld = cards.append("2 months");
    duration = cards.append("31:30\n");
    // cards.append("\n");
}



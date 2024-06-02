let div = document.createElement("div");
div.className = "alert";
div.innerHTML = "<span>This is a span inside a div</span>";
let testnode = document.body.firstElementChild;
testnode.before(div)

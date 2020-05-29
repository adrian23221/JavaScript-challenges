let div = document.createElement("div");
document.body.appendChild(div);
grow = true;

div.style.width = "100%";
div.style.backgroundColor = "red";
div.style.position = "fixed";
div.style.top = "0";

height = 10;

let moving = function () {
    console.log(height)
    if (grow === true) {
        height += 5
        div.style.height = height + "px";
    } else {
        height -= 5
        div.style.height = height + "px";
        div.style.backgroundColor = "green";
    }
    if (height > window.innerHeight / 2) {
        grow = false;
    } else if (height < 10) {
        grow = true;
        div.style.backgroundColor = "red";

    }
}

window.addEventListener('scroll', moving);
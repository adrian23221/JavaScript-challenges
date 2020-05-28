let btn = document.querySelector(".btn");
let ul = document.querySelector("ul")

let total = -1
btn.addEventListener('click', createLi);

function createLi() {
    total += 2;
    console.log(total);
    var li = document.createElement("li");
    ul.appendChild(li)
    li.textContent = total;
    if (total % 3 === 0) {
        console.log("by 3");
        li.classList.add("bigger");
    }
}
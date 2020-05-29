let btn = document.querySelector("button");
btn.style.fontSize = "40px";
let liItems = document.querySelectorAll("li");
let liFont = 40;

//for method

// btn.addEventListener("click", () => {
//     for (let i = 0; i < liItems.length; i++) {
//         liItems[i].style.fontSize = liFont + "px";
//         liItems[i].style.display = "block";
//     }
//     liFont += 5;
// });

//foreach

btn.addEventListener("click", () => {

    liItems.forEach(li => {
        li.style.display = "block";
        li.style.fontSize = liFont + "px";
    })
    liFont += 5;
})
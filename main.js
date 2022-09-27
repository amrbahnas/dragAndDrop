let inpt = document.getElementById("inpt")
let btn = document.getElementById("btn")
let boxs = document.querySelectorAll(".box")
var drop = null;

btn.onclick = function () {
    if (inpt.value != "") {
        boxs[0].innerHTML += ` <p class="item" draggable="true">${inpt.value}</p>`
        inpt.value = "";
    }
    itemBehaver();
}


function itemBehaver() {
    let items = document.querySelectorAll(".box .item")
    items.forEach((item) => {
        item.addEventListener("dragstart", function () {
            this.style.opacity = "0.5"
            drop = this;
        });
        item.addEventListener("dragend", function () {
            this.style.opacity = "1"
            drop = null;
        });
    })
}

boxs.forEach((box) => {
    box.addEventListener("dragover", function (e) {
        e.preventDefault();
        box.style.backgroundColor = "green"
    })
    box.addEventListener("dragleave", function () {
        box.style.backgroundColor = "#533483";
    })
    box.addEventListener("drop", function () {
        box.append(drop);
        box.style.backgroundColor = "#533483";
    })
})





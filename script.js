let body = document.querySelector("body");
let easGrid = document.querySelector(".eas-grid");


let buildButton = document.createElement("button");
buildButton.textContent = "build";
body.appendChild(buildButton);

gridSize = 16;

buildButton.addEventListener("click", ()=> {
    let divAmount = gridSize * gridSize;
    for (let i = 0; i < divAmount; i++) {
        let gridBox = document.createElement("div");
        easGrid.appendChild(gridBox);
        gridBox.classList.add("gridbox");
        paintGrid();

    }
})

brushColor = "black";


function paintGrid() {
    let gridboxArray = document.querySelectorAll(".gridbox");
    for (let i = 0; i < gridboxArray.length; i++) {
        gridboxArray[i].addEventListener("mouseover", ()=> {
            console.log("hello");
            gridboxArray[i].style.backgroundColor = "black";
        })
    }
}
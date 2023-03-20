let gridSize = 100;
let easGrid = document.querySelector(".eas-grid");
let body = document.querySelector("body");
let brushColor = "black";
const blueButton = document.querySelector("#blue");
const redButton = document.querySelector("#red");
const greenButton = document.querySelector("#green");

blueButton.addEventListener("click", ()=> {
    brushColor = "blue";
    paintColor(brushColor);
})

redButton.addEventListener("click", ()=> {
    brushColor = "red";
    paintColor(brushColor);
})

greenButton.addEventListener("click", ()=> {
    brushColor = "green";
    paintColor(brushColor);
})

function initialGrid (size) {
    let gridAmount = size * size;
    for (let i = 0; i < gridAmount; i++) {
        let gridSquare = document.createElement("div");
        easGrid.appendChild(gridSquare);
        console.log(i);
        gridSquare.classList.add("grid-square");
    }
    easGrid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    easGrid.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
}

function paintColor(color) {
    let gridArray = document.querySelectorAll(".grid-square");
    for (let i = 0; i < gridArray.length; i++) {
        gridArray[i].addEventListener("mouseover", ()=> {
            gridArray[i].style.backgroundColor = color;
        })
    }
}

initialGrid(gridSize);
paintColor(brushColor);
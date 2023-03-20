let gridSize = 10;
let easGrid = document.querySelector(".eas-grid");
let body = document.querySelector("body");
let brushColor = "black";

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

function paintColor() {
    let gridArray = document.querySelectorAll(".grid-square");
    for (let i = 0; i < gridArray.length; i++) {
        gridArray[i].addEventListener
    }
}

initialGrid(gridSize);
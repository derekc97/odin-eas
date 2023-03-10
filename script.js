console.log("hello")
let body = document.querySelector("body");
let easContainer = document.querySelector(".eas-container");
let brushColor;
let canvasSize = 16;

let sizePrompt = document.createElement("button");
sizePrompt.textContent = "What size canvas?";
body.appendChild(sizePrompt);

sizePrompt.addEventListener("click", () => {
    canvasSize = window.prompt("Enter a canvas size.");
    createCanvas(canvasSize);
})


createCanvas();



function createCanvas(canvasSize) {
    for (let i = 0; i < canvasSize; i++) {
    let div = document.createElement("div");
    easContainer.appendChild(div);
    div.classList.add("eas");
    div.textContent = " ";
    for (let x = 0; x < canvasSize; x++) {
        let row = document.createElement("div");
        div.appendChild(row);
        row.classList.add("eas")
        row.textContent = " ";
    }
}
}

let redBrush = document.createElement("button");
let blueBrush = document.createElement("button");
let yellowBrush = document.createElement("button");
redBrush.textContent = "red brush";
blueBrush.textContent = "blue brush";
yellowBrush.textContent = "yellow brush";
body.appendChild(redBrush);
body.appendChild(blueBrush);
body.appendChild(yellowBrush);

redBrush.addEventListener("click", () => {
    brushColor = "red";
})

blueBrush.addEventListener("click", () => {
    brushColor = "blue";
})

yellowBrush.addEventListener("click", () => {
    brushColor = "yellow";
})

let eas = document.querySelectorAll(".eas");

for (let i = 0; i < eas.length; i++) {
    eas[i].addEventListener("mouseover", () => {
        eas[i].style.backgroundColor = brushColor;
    })
}

let resetButton = document.createElement("button");
resetButton.textContent = "Reset!";
body.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    for (let i = 0; i < eas.length; i++) {
        eas[i].style.backgroundColor = "white";
    }
})

const button = document.querySelector("button");
const container = document.querySelector(".container");
let num = 0;

button.addEventListener("click", () => {

    while(container.hasChildNodes()){
        container.removeChild(document.querySelector(".row"));
    }
    
    do{
        num = parseInt(prompt("What is the size of your canvass?"), 10);
        if(isNaN(num) || num < 1 || num > 100){
            alert("Please enter a number between 1-100");
        }
    } while(isNaN(num) || num < 1 || num > 100)

    for(let x = 0; x < num; x++){
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row");
        container.appendChild(rowDiv);
        for(let y = 0; y < num; y++){
            let grid = document.createElement("div");
            grid.setAttribute("class","grid");
            rowDiv.appendChild(grid);
        }
    }

    let squares = document.querySelectorAll(".grid");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => { 
            let currentOpacity = parseFloat(square.dataset.opacity);
            if (isNaN(currentOpacity)) {
                square.dataset.opacity = 0.1;
                currentOpacity = square.dataset.opacity;
            }
            else {
                currentOpacity += 0.1;
                square.dataset.opacity = currentOpacity;
            }
            console.log(currentOpacity);

            let red = Math.floor(Math.random()*255);
            let green = Math.floor(Math.random()*255);
            let blue = Math.floor(Math.random()*255);

            square.setAttribute("style",`background-color: rgba(${red},${green},${blue},${currentOpacity});`);  
        });
    });

});








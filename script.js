
const button = document.querySelector("button");
const container = document.querySelector(".container");
let num = 0;

button.addEventListener("click", () => {

    container.innerHTML = "";
    
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
            grid.dataset.opacity = 0;
            rowDiv.appendChild(grid);
        }
    }

});

container.addEventListener("mouseover", e => {
    if(e.target.matches(".grid")) {
        let square = e.target;

        let currentOpacity = parseFloat(square.dataset.opacity) || 0;
        square.dataset.opacity = currentOpacity = Math.min(currentOpacity + 0.1, 1);

        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);

        square.setAttribute("style",`background-color: rgba(${red},${green},${blue},${currentOpacity});`);
    }  
});
        







const input = document.querySelector("#input");
const reset = document.querySelector("#reset");
const container = document.querySelector(".container");
let isMouseDown = false;
let canvasGenerated = false;

input.addEventListener("click", (e) => {
    
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
        
        var num;
        do{
            num = parseInt(prompt("What is the size of your canvass?"), 10);
            if(isNaN(num) || num < 1 || num > 100){
                alert("Please enter a number between 1-100");
            }
        } while(isNaN(num) || num < 1 || num > 100)

        for(let x = 0; x < num; x++){
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            container.appendChild(rowDiv);
            for(let y = 0; y < num; y++){
                let grid = document.createElement("div");
                grid.classList.add("grid");
                grid.dataset.opacity = 0;
                rowDiv.appendChild(grid);
            }
        }
        canvasGenerated = true;

});

reset.addEventListener("click", () => {
    if(canvasGenerated){
        document.querySelectorAll(".grid").forEach(square => {
            square.style.backgroundColor = "white";
            square.dataset.opacity = 0;
        });
    }

});

container.addEventListener("mouseover", e => {
    if(e.target.matches(".grid") && isMouseDown) {
        let square = e.target;

        let currentOpacity = parseFloat(square.dataset.opacity) || 0;
        square.dataset.opacity = currentOpacity = Math.min(currentOpacity + 0.3, 1);

        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);

        square.style.backgroundColor = `rgba(${red},${green},${blue},${currentOpacity})`;
    }  
});

document.addEventListener("mousedown", (e) => {
        e.preventDefault();    
        isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});
        






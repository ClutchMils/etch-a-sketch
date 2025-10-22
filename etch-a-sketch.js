const button = document.createElement("button");
const container = document.querySelector("#container");

let squares = 100;
let totalSquares = squares * squares;
let elementAppendCount = 0;
const row = [];
const element = [];

button.textContent = "create etch-a-sketch";

button.addEventListener("click", ()=> {
      
    squares = prompt("Enter the amount of grid squares","100 max squares" )

    if(squares <=100){
          for (let rowCount = 0; rowCount < squares; rowCount++){
            row[rowCount] = document.createElement("div"); 
        }
        
        for (let elementCount = 0; elementCount < totalSquares; elementCount++){
            element[elementCount] = document.createElement("div");
            element[elementCount].textContent = "...";           
        }


        for (let rowAppendCount = 0; rowAppendCount < squares; rowAppendCount++){
            
            let currentRow = (rowAppendCount + 1) * squares;

                do {
                    row[rowAppendCount].appendChild(element[elementAppendCount]);
                    row[rowAppendCount].classList.add("main-div");
                    elementAppendCount++;
                } while (elementAppendCount<currentRow)

            container.appendChild(row[rowAppendCount]);
        }

        const divs = document.querySelectorAll("div"); 

        // etch-a-sketch function
        divs.forEach((div) => {
            div.addEventListener("mouseenter", () => {

            for (const child of div.children)
                {
                child.classList.add('hovered');
                }

            div.classList.remove('hovered');
            div.classList.add('sketch');
            });

            div.addEventListener("mouseleave", () => {
                // console.log("leave");
               
                // div.classList.remove('hovered');
            });

        });
        
    } else {
        alert("100 max squares")
    }
    
      
});

container.appendChild(button);


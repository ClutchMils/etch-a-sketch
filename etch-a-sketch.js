const outsideDivOne = document.createElement("div");
const outsideDivTwo = document.createElement("div");
const outsideDivThree = document.createElement("div");
const outsideDivFour = document.createElement("div");

const insideDivOne = document.createElement("div");
const insideDivTwo = document.createElement("div");
const insideDivThree = document.createElement("div");
const insideDivFour = document.createElement("div");
const insideDivFive = document.createElement("div");
const insideDivSix = document.createElement("div");
const insideDivSeven = document.createElement("div");
const insideDivEight = document.createElement("div");
const insideDivNine = document.createElement("div");
const insideDivTen = document.createElement("div");
const insideDiv11 = document.createElement("div");
const insideDiv12 = document.createElement("div");
const insideDiv13 = document.createElement("div");
const insideDiv14 = document.createElement("div");
const insideDiv15 = document.createElement("div");
const insideDiv16 = document.createElement("div");

const button = document.createElement("button");
button.textContent = "test";

button.addEventListener("click", ()=> {
    let squares = 1;
    squares = prompt("Enter the amount of grid squares","100 max squares" )
    // console.log(squares);

    // let gridRow = squares;
    // let rowHolder = squares;

    
    let totalSquares = squares * squares;
    // let rowHolderCount = 1;
    // let rowPushCount = 1;

    for (let rowHolderCount = 0; rowHolderCount < squares; rowHolderCount++){
        const rowHolder = [];
        rowHolder[rowHolderCount] = document.createElement("div"); 
    }
  
    for (let rowCount = 0; rowCount < totalSquares; rowCount++){
        const gridRow = [];
        gridRow[rowCount] = document.createElement("div");           
    }
    

});

insideDivOne.textContent = "....";
insideDivTwo.textContent = "....";
insideDivThree.textContent = "....";
insideDivFour.textContent = "....";
insideDivFive.textContent = "....";
insideDivSix.textContent = "....";
insideDivSeven.textContent = "....";
insideDivEight.textContent = "....";
insideDivNine.textContent = "....";
insideDivTen.textContent = "....";
insideDiv11.textContent = "....";
insideDiv12.textContent = "....";
insideDiv13.textContent = "....";
insideDiv14.textContent = "....";
insideDiv15.textContent = "....";
insideDiv16.textContent = "....";


outsideDivOne.classList.add("main-div");
outsideDivTwo.classList.add("main-div");
outsideDivThree.classList.add("main-div");
outsideDivFour.classList.add("main-div");



outsideDivOne.appendChild(insideDivOne);
outsideDivOne.appendChild(insideDivTwo);
outsideDivOne.appendChild(insideDivThree);
outsideDivOne.appendChild(insideDivFour);
outsideDivTwo.appendChild(insideDivFive);
outsideDivTwo.appendChild(insideDivSix);
outsideDivTwo.appendChild(insideDivSeven);
outsideDivTwo.appendChild(insideDivEight);
outsideDivThree.appendChild(insideDivNine);
outsideDivThree.appendChild(insideDivTen);
outsideDivThree.appendChild(insideDiv11);
outsideDivThree.appendChild(insideDiv12);
outsideDivFour.appendChild(insideDiv13);
outsideDivFour.appendChild(insideDiv14);
outsideDivFour.appendChild(insideDiv15);
outsideDivFour.appendChild(insideDiv16);

const container = document.querySelector("#container");
container.appendChild(button);
container.appendChild(outsideDivOne);
container.appendChild(outsideDivTwo);
container.appendChild(outsideDivThree);
container.appendChild(outsideDivFour);


const divs = document.querySelectorAll("div"); 

// etch-a-sketch function
divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {

     for (const child of div.children)
        {
           child.classList.add('hovered');
        }

    div.classList.remove('hovered');
    });

    div.addEventListener("mouseleave", () => {
        // console.log("leave");
        div.classList.remove('hovered');
    });

});


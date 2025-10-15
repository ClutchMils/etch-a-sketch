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

console.log(insideDivOne.textContent = "e")
console.log(insideDivTwo.textContent = "e")
console.log(insideDivThree.textContent = "e")
console.log(insideDivFour.textContent = "e")
console.log(insideDivFive.textContent = "e")
console.log(insideDivSix.textContent = "e")
console.log(insideDivSeven.textContent = "e")
console.log(insideDivEight.textContent = "e")
console.log(insideDivNine.textContent = "e")
console.log(insideDivTen.textContent = "e")
console.log(insideDiv11.textContent = "e")
console.log(insideDiv12.textContent = "e")
console.log(insideDiv13.textContent = "e")
console.log(insideDiv14.textContent = "e")
console.log(insideDiv15.textContent = "e")
console.log(insideDiv16.textContent = "e")


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
container.appendChild(outsideDivOne);
container.appendChild(outsideDivTwo);
container.appendChild(outsideDivThree);
container.appendChild(outsideDivFour);

// const mainDiv = document.querySelector(".main-div")
const divs = document.querySelectorAll("div"); 

divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        // console.log("enter");
        // console.log(div.childElementCount);
        // div.classList.add('hovered');
     for (const child of div.children){
        // console.log(child.tagName);
           child.classList.add('hovered');
     }
    });

    div.addEventListener("mouseleave", () => {
        console.log("leave");
        div.classList.remove('hovered');
    });

});


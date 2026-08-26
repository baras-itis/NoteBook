import { context } from "../../../main.js";
const rectangle = document.getElementById("rectangle");
rectangle.addEventListener("mousedown",event => {
    context.beginPath();
    context.fillRect(300,300,100,100);
    context.stroke();
    console.log("rx");
});

function draw(x,y,x1,y1){
    context.moveLine(x,y);
    context.moveLine()
}

// 
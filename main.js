// Переменная содержащая наш цвет
import {color} from "./src/copmonents/changeColor.js"
// Ширина и высота
const [width, height] = [1200, 800];

var p = 10;
var draw = false


function DrawGrid(){
  
  // Columns
    for (let x = 0; x <= width; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, height + p);
    }

    for (let x = 0; x <= height; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(width + p, 0.5 + x + p);
    }
  context.strokeStyle = "black";
  context.stroke();
    if(context.stroke()){

    }
}



// Координаты
let [x,y] = [0,0];

// рисуем ли мы сейчас
let isDrawing = false;

// Там где мы рисуем
const blackboard = document.getElementById("black-board");
blackboard.width = width;
blackboard.height = height;
const context = blackboard.getContext('2d');

if(window){
  DrawGrid();
}

// Добавление отслеживание при движении мыши
blackboard.addEventListener("mousemove", (event) => {
  let currentX = event.offsetX;
  let currentY = event.offsetY;
  if(isDrawing){
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(currentX, currentY);
    [x,y] = [currentX, currentY]
    context.strokeStyle = color;
    context.stroke();

    context.closePath();
  }
});





blackboard.addEventListener("mouseleave", (event)=>{
  isDrawing = false;

})

blackboard.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [x, y] = [event.offsetX, event.offsetY]; 
});

blackboard.addEventListener("mouseup", (event) => {
  isDrawing = false;
  [x, y] = [event.offsetX, event.offsetY]; 
})

export {context, isDrawing}
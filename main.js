// Переменная содержащая наш цвет
import { color } from "./src/copmonents/changeColor.js"
// Ширина и высота
const [width, height] = [1200, 800];

var p = 10;
var draw = false





// Координаты
let [x, y] = [0, 0];

// рисуем ли мы сейчас
let isDrawing = false;

// Там где мы рисуем
const blackboard = document.getElementById("black-board");
blackboard.width = width;
blackboard.height = height;
const context = blackboard.getContext('2d');


// Добавление отслеживание при движении мыши
blackboard.addEventListener("mousemove", (event) => {
  let currentX = event.offsetX;
  let currentY = event.offsetY;
  if (isDrawing) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(currentX, currentY);
    [x, y] = [currentX, currentY]
    context.strokeStyle = color;
    context.stroke();

    context.closePath();
  }
});





blackboard.addEventListener("mouseleave", (event) => {
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

export { context, isDrawing }
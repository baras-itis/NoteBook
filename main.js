// Ширина и высота
const [width, height] = [400, 400];

// Координаты
let [x,y] = [0,0];
let isDrawing = false;

const blackboard = document.getElementById("black-board");
blackboard.width = width;
blackboard.height = height;
const context = blackboard.getContext('2d');

const clear = document.getElementById("clearButton");
clear.addEventListener("mousedown", (event)=>{
  clearContext(context);
})

// Добавление отслеживание при движении мыши
blackboard.addEventListener("mousemove", (event) => {
  
  let currentX = event.offsetX;
  let currentY = event.offsetY;
  
  if(isDrawing){
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(currentX, currentY);
    [x,y] = [currentX, currentY]
    context.stroke();
    context.closePath();
  }
});

blackboard.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [x, y] = [event.offsetX, event.offsetY]; 
});

blackboard.addEventListener("mouseup", (event) => {
  isDrawing = false;
  [x, y] = [event.offsetX, event.offsetY]; 
})


// Функция очистки

function clearContext(context){
  context.clearRect(0,0, width, height);
}
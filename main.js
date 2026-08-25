// Ширина и высота
const [width, height] = [1200, 800];

// Координаты
let [x,y] = [0,0];

// рисуем ли мы сейчас
let isDrawing = false;

// цвет линий
let strokeColor = 'black';
let changeColor = false;
let currentColorIndex = 1;  

// Все цвета для рисования
const colors = [
  "#1a1423",
  "#ffdc5e",
  "#ff0054",
  "#7fd8be"
];





// Там где мы рисуем
const blackboard = document.getElementById("black-board");
blackboard.width = width;
blackboard.height = height;
const context = blackboard.getContext('2d');


// Добавление отслеживание при движении мыши
blackboard.addEventListener("mousemove", (event) => {
  
  let currentX = event.offsetX;
  let currentY = event.offsetY;
  
  if(isDrawing){
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(currentX, currentY);
    [x,y] = [currentX, currentY]
    context.strokeStyle = strokeColor;
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

export {context}
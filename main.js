// Ширина и высота
const [width, height] = [400, 400];

// Координаты
let [x,y] = [0,0];

// рисуем ли мы сейчас
let isDrawing = false;

// цвет линий
let strokeColor = 'black';
let changeColor = false;
let currentColorIndex = 0;  

// Все цвета для рисования
const colors = [
  "black",
  "yellow",
  "red",
  "green"
];

async function change(index){
  if(currentColorIndex === colors.length){
    index = 0;
    currentColorIndex = 1;
    strokeColor = 'black';
  }
  else{     currentColorIndex +=1;
 strokeColor = colors[index];
  }
  console.log(index, colors[index]); 
  changeColor = false;
  const showCurrentColor = document.getElementById("current-color");
  showCurrentColor.style.cssText = `border: 1px solid black; width:20px; height:20px; background-color: ${strokeColor}`;

}

// Кнопка для смены цвета линии
const swapColors = document.getElementById("swap-button");
swapColors.addEventListener("mousedown", (event) => {
  changeColor = true;
  changeColor ? change(currentColorIndex) : false;
})

// Див блок показывающий наш цвет


// Там где мы рисуем
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
    context.strokeStyle = strokeColor;
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
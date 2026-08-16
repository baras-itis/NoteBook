let isDrawing = false;
let x = 0,
  y = 0;

// Настройка рабочей зоны
const height = window.innerHeight - 10;
const width = window.innerWidth - 10;
const canvas = document.getElementById("blackboard");
canvas.width = width;
canvas.height = height;
const context = canvas.getContext("2d");

// Кнопка сброса рисулек
const button = document.getElementById("clearButton");
button.addEventListener("click", (e) => {
  isDrawing = false;
  Clear(context);
});

// Функция сброса рисулек
function Clear() {
  context.clearRect(0, 0, width, height);
  console.log("cleared");
}

function Draw(x, y, x1, y1) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x1, y1);
  context.stroke();
  context.closePath();
}

canvas.addEventListener("mousedown", (e) => {
  console.log("Рисули");
  x = e.offsetX;
  y = e.offsetY;
  return (isDrawing = true);
});

canvas.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  isDrawing ? Draw(x, y, e.offsetX, e.offsetY) : ([x, y] = [0, 0]);
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

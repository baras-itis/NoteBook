let isDrawing = false;
let x = 0;
let y = 0;

const canvas = document.getElementById("blackboard");
const context = canvas.getContext("2d");

const layout = document.getElementById("blackboard");
const layoutcontext = layout.getContext("2d");

const button = document.getElementById("clearButton");
let clear = false;

button.addEventListener("click", (e) => {
  clear = true;
  if (clear) {
    clearFunction(context);
    clear = false;
  }
});

function clearFunction(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
  drawGrid(2, 20, 20, "#ccc");
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
  drawGrid(2, 20, 20, "#ccc");
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
  drawGrid(2, 20, 20, "#ccc");
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function drawGrid(lineWidth, cellWidth, cellHeight, color) {
  layoutcontext.strokeStyle = color;
  layoutcontext.lineWidth = lineWidth;

  let width = layoutcontext.width;
  let height = layoutcontext.height;

  for (let x = 0; x <= width; x += cellWidth) {
    layoutcontext.beginPath();
    layoutcontext.moveTo(x, 0);
    layoutcontext.lineTo(x, height);
    layoutcontext.stroke();
  }

  for (let y = 0; y <= height; y += cellHeight) {
    layoutcontext.beginPath();
    layoutcontext.moveTo(0, y);
    layoutcontext.lineTo(width, y);
    layoutcontext.stroke();
  }
}

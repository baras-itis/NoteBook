// Styles
const blackboard = await document.querySelector(".blackboard");
const main = await document.getElementById("main");
main.style.cssText =
  "overflow-x:hidden; display:grid; height:100%; margin:0; padding:0; display:relative;";

// canvas width & height

const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;

// Canvas & preparing desk
const canvas = document.getElementById("blackBoard");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
canvas.style.cssText = "outline: thick double #32a1ce;";

// Context for drawing
const context = canvas.getContext("2d");

context.strokeStyle = "black";
context.moveTo(10, 100);
context.lineTo(0, 0);
context.stroke();

// Logic of draw

/*
  boolean variable
    watchs if the mouse on the board, 
    true -> we draw 
    false -> no draw

    x, y - poisition of our mouse
*/

let isDrawing = false,
  lastX = 0,
  lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  const currentX = e.offsetX;
  const currentY = e.offsetY;

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(currentX, currentY);
  context.stroke();
  context.closePath();

  lastX = currentX;
  lastY = currentY;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

import { color } from "./changeColor";

const button = document.getElementById("new-page");
const pages = document.getElementById("pages")
let newPage = false;
let blackboard;
const [width, height] = [1200, 800];
let isDrawing = false;
let [x, y] = [0, 0];
button.addEventListener("mousedown", event => {
    blackboard = pages.appendChild(document.createElement("canvas"));
    blackboard.id = "black-board";
    blackboard.width = width;
    blackboard.height = height;
    newPage = true;
    const context = blackboard.getContext("2d");

    if (newPage) {
        blackboard.addEventListener("mousemove", event => {
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
        })
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
    }

}); 
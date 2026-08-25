import { context } from "../main.js";
const clear = document.getElementById("clear");

clear.addEventListener("mousedown", (event) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
});

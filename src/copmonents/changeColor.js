const colors = [
    "#8EB9FC", // 0 
    "#FF513D", // 1 
    "#5A5E5B", // 2 
    "#00FC90"  // 3

];
let index = 0;
let color = colors[index];
const changeButton = document.getElementById("change-color");
changeButton.style.cssText = "background-color:#8EB9FC";
const changeColor = (id) => {
    console.log(id)

    color = colors[id];

    changeButton.style.backgroundColor = colors[index];
}

changeButton.addEventListener("mousedown", event => {
    index += 1;
    index === colors.length ? index = 0 : null;
    changeColor(index);
})

export { color };


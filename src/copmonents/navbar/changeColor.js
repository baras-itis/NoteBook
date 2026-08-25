const colors = [
    "#8EB9FC",
    "#FF513D",
    "#5A5E5B",
    "#00FC90"

];
let index = 0;
let color = colors[index];
const changeButton = document.getElementById("change-color");

const changeColor = (id) => {
    color = colors[id];
    changeButton.style.backgroundColor=colors[index];
    id === colors.length-1 ? index = 0 : null;
    console.log(color)
}

changeButton.addEventListener("mousedown", event => {
    index +=1;
    changeColor(index);
})

export {color};


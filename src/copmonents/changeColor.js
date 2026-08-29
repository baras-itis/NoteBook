const colors = [
    "oklch(74.6% 0.16 232.661)", // 0
    "oklch(64.5% 0.246 16.439)", // 1
    "oklch(70.7% 0.022 261.325)", // 2
    "oklch(79.2% 0.209 151.711)"  // 3

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


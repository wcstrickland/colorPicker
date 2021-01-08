/**
 * @param {"int"} min 
 * @param {"int"} max 
 * @returns {"int"} a random integer between min and max
 */
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @returns {"string"} a string representing a RGB color value
 */
function randRgb() {
    let color1 = randInt(0, 255);
    let color2 = randInt(0, 255);
    let color3 = randInt(0, 255);
    let colorText = `rgb(${color1},${color2},${color3})`;
    return colorText;
}

function changeBackground() {
    let color = randRgb();
    h1.innerText = color;
    document.body.style.backgroundColor = color;
}

const h1 = document.querySelector('h1');
const colorBtn = document.querySelector("#color");
colorBtn.addEventListener("click", changeBackground);
const colorSlider = document.getElementById("color");;
const brightnessSlider = document.getElementById("brightness");
const colorDisplay = document.getElementById("selected-color");
const itemsContainer = document.getElementById("boxes-container");
let hue = 0;
let brightness = 50;
let color = 'hsl(' + hue + ', 100%, ' + brightness +'%)';
let dimensions = 10;

updateBoard(dimensions);
brightnessSlider.style.backgroundColor ='hsl(' + 0 + ', 0%, 70%)';
colorDisplay.style.backgroundColor = 'hsl(' + hue + ', 100%, ' + brightness +'%)';

colorSlider.addEventListener("input", () =>{
    hue = colorSlider.value;
    colorSlider.style.backgroundColor = 'hsl(' + hue + ', 100%, 50%)'
    color = 'hsl(' + hue + ', 100%, ' + brightness +'%)';
    colorDisplay.style.backgroundColor = color;
});

brightnessSlider.addEventListener("input", () =>{
    brightness = brightnessSlider.value;
    brightnessSlider.style.backgroundColor = 'hsl(' + 0 + ', 0%, ' + brightness +'%)';
    color = 'hsl(' + hue + ', 100%, ' + brightness +'%)';
    colorDisplay.style.backgroundColor = color;
});

function updateBoard(dim){
    const row = document.createElement('div');
    for(let i = 0; i < dim; i++){
        const item = document.createElement('div');
        item.classList.add("tile");
        row.appendChild(item);
    }
    row.classList.add("row");
    itemsContainer.appendChild(row);
}
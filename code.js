const colorSlider = document.getElementById("color");;
const brightnessSlider = document.getElementById("brightness");
const tileSlider = document.getElementById("size");
const colorDisplay = document.getElementById("selected-color");
const itemsContainer = document.getElementById("boxes-container");

let hue = 0;
let brightness = 50;
let color = 'hsl(' + hue + ', 100%, ' + brightness +'%)';
let dimensions = 20;
let isMouseDown = false;
updateBoard(dimensions);
brightnessSlider.style.backgroundColor ='hsl(' + 0 + ', 0%, 70%)';
colorSlider.style.backgroundColor = color;
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

tileSlider.addEventListener("input", () =>{
    while (itemsContainer.children.length >= 2) {
        itemsContainer.removeChild(itemsContainer.lastChild);
      }
    updateBoard(tileSlider.value);
});


  

function updateBoard(dim){
    const row = document.createElement('div');
    for(let i = 0; i < dim; i++){
        const item = document.createElement('div');
        item.classList.add("tile");
        
        row.appendChild(item);
    }
    row.classList.add("row");
    for(let i = 0; i < dim; i++){
        itemsContainer.appendChild(row.cloneNode(true));
        
    }

    itemsContainer.addEventListener('mouseover', function(event) {
        const clickedItem = event.target;
        if (clickedItem.classList.contains('tile')) {
          clickedItem.style.backgroundColor = color;
        }
      });


    
    
}


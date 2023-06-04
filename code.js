const colorSlider = document.getElementById("color");;
const brightnessSlider = document.getElementById("brightness");
const tileSlider = document.getElementById("size");
const colorDisplay = document.getElementById("selected-color");
const itemsContainer = document.getElementById("boxes-container");
const randomizeButton = document.getElementById("randomize");

let hue = 0;
let brightness = 50;
let color = 'hsl(' + hue + ', 100%, ' + brightness +'%)';
let dimensions = 20;
let random = false;
let clicking = false;



const brutalColors = [
  "#87CEEB",
  "#A7DBD8",
  "#BAFCA2",
  "#90EE90",
  "#FFDBF8",
  "#F4D738",
  "#FFA07A",
  "#FF7A5C",
  "#FFC0CB",
  "#FFB2EF",
  "#C4A1FF",
  "#A388EE"
];

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

randomizeButton.addEventListener("click", () =>{
  random = !random;
  if(random) colorDisplay.classList.add("rainbow-animation");
  else colorDisplay.classList.remove("rainbow-animation");
});

document.addEventListener("mousedown", () =>{
  clicking = true;
  const clickedItem = event.target;
  if (clickedItem.classList.contains('tile')) draw(clickedItem, true);
})
document.addEventListener("mouseup", () =>{
  clicking = false;
})

itemsContainer.addEventListener('mouseover', function(event) {
  const clickedItem = event.target;
  if (clickedItem.classList.contains('tile') && clicking) draw(clickedItem, true);
});


itemsContainer.addEventListener('touchmove', function(event) {
  event.preventDefault();
  const touch= event.touches[0];
  const touchedItem = document.elementFromPoint(touch.clientX, touch.clientY);
  if (touchedItem.classList.contains('tile')) draw(touchedItem, false);
});

function draw(clickedItem, playSound){
  if(random) clickedItem.style.backgroundColor = brutalColors[Math.floor(Math.random() * brutalColors.length)];
    else clickedItem.style.backgroundColor = color;
    if(playSound){
      let pop = new Audio("pop.flac");
      pop.volume = 0.5;
      pop.play();
    }
    
}

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

  
}


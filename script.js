const grid = document.querySelector('.grid');
const sizeInput = document.querySelector('input');
const sizerBtn = document.querySelector('.sizer');
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', reloadGrid)
sizerBtn.addEventListener('click', changeSize);


//Creates the divs, adds css class, adds an event listner, and nests it in grid container
function setUpGrid (size){
clearGrid()
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

for (i = 0; i< (size*size); i++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener("mouseover", colorChange);
    gridElement.classList.add('grid-element')
    grid.appendChild(gridElement);
    gridElement.style.backgroundColor = '#fefefe';
}
}

//changes the size of the grid by prompt and resets it
function changeSize(v) {
    v = prompt();
    if (v < 100){
    setUpGrid(v)
    }else setUpGrid(100);
}

//colorchange function
function colorChange(e) {
    e.target.style.backgroundColor = '#111';
}

//clears the grid container
function clearGrid () {
    grid.innerHTML ='';
}
//function for clearing the grid and resetting it to 16x16
function reloadGrid() {
    clearGrid();
    setUpGrid(16); 
}


//sets up the grid on pageload.
window.onload = () => {
    setUpGrid(16);
}

//Didn't add 'extra credit features will return to it later.
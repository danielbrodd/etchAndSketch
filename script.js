const grid = document.querySelector('.grid');
const sizeInput = document.querySelector('input');
const sizerBtn = document.querySelector('.sizer');
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', reloadGrid)
sizerBtn.addEventListener('click', changeSize);

function changeSize(v) {
    v = prompt();
    if (v < 100){
    setUpGrid(v)
    }else setUpGrid(100);
}

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


function colorChange(e) {
    e.target.style.backgroundColor = '#111';
}
function clearGrid () {
    grid.innerHTML ='';
}
function reloadGrid() {
    clearGrid();
    setUpGrid(16); 
}



window.onload = () => {
    setUpGrid(16);
}

//Didn't add 'extra credit features
const gridContainer = document.querySelector('.grid-container');
let gridUnit = document.createElement('div');
const GRIDCONTAINERSIZE = 400;
gridContainer.style = `width: ${GRIDCONTAINERSIZE}px; height: ${GRIDCONTAINERSIZE}px;`
let numOfColumnsRows = 10;
let gridSize = (num) => {return Math.pow(num, 2);};
let currentColor = ('#ffffff');
let gridUnits = [];
const sizeChanger = document.querySelector('button');
let mouseDown = false;

createGridUnits(gridSize(numOfColumnsRows));
sizeChanger.addEventListener('click', () => {createGridUnits(gridSize(chooseGridSize()));})
let checkMouseDown = () => gridContainer.addEventListener('mousedown', () => {debugger; mouseDown = true});
gridContainer.addEventListener('mouseup', () => {debugger; mouseDown = false})

function createGridUnits(size) {
    deletePrevGrid();
    for (let i = 0; i < size; i++) {
        
        gridUnit = document.createElement('div');
        gridUnits.push(gridUnit);
        gridUnits[i].classList.add('grid-unit');
        gridContainer.appendChild(gridUnits[i]);
    }
    properlySizeGrid(size);
    allowColorChange();
}

function allowColorChange() {
    gridUnits.forEach(gridUnit => {
        gridUnit.addEventListener('mouseenter', () => {
                debugger;
                checkMouseDown();
                debugger;
                if (mouseDown == true) {
                debugger;
                gridUnit.classList.add('colored-grid-unit');
                }
        }); 
    });
}

function deletePrevGrid() {
    if (gridUnits.length !== 0) {
        gridUnits.forEach(gridUnit => {
            gridUnit.classList.remove('.grid-unit');
        });
    }
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
        gridUnits.pop();
    }
}

function properlySizeGrid(size) {
    gridUnits.forEach(gridUnit => {
        gridUnit.style = 
        `width: ${GRIDCONTAINERSIZE/Math.sqrt(size)}px; 
        height: ${GRIDCONTAINERSIZE/Math.sqrt(size)}px;`;
    });
}

function chooseGridSize () {
    return parseInt(prompt('Enter the number of rows.'));
}
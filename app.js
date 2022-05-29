const gridContainer = document.querySelector('.grid-container');
let gridUnit = document.createElement('div');
const GRIDCONTAINERSIZE = 400;
gridContainer.style = `width: ${GRIDCONTAINERSIZE}px; height: ${GRIDCONTAINERSIZE}px;`
const STARTINGROWSVALUE = 10;
let numOfColumnsRows = Math.pow(STARTINGROWSVALUE, 2);
let currentColor = ('#ffffff');
let gridUnits = [];
const sizeChanger = document.querySelector('button');
let mouseDown = false;

createGridUnits(numOfColumnsRows);
sizeChanger.addEventListener('click', () => {createGridUnits();})

let checkMouseDown = () => gridContainer.addEventListener('mousedown', () => {mouseDown = true});
gridContainer.addEventListener('mouseup', () => {mouseDown = false})

let gridSize = () => {
    numOfColumnsRows = Math.pow(numOfColumnsRows, 2);
    return numOfColumnsRows
};

function chooseGridSize () {
    numOfColumnsRows = parseInt(prompt('Enter the number of rows.'));
    return numOfColumnsRows;
}

function createGridUnits(startingSize) {
    //startingSize is for the developer, in inital bootup
    if (startingSize != numOfColumnsRows) {
    chooseGridSize();
    gridSize();
    deletePrevGrid();
    }
    for (let i = 0; i < numOfColumnsRows; i++) {
        
        gridUnit = document.createElement('div');
        gridUnits.push(gridUnit);
        gridUnits[i].classList.add('grid-unit');
        gridContainer.appendChild(gridUnits[i]);
    }
    properlySizeGrid();
    allowColorChange();
}

function allowColorChange() {
    gridUnits.forEach(gridUnit => {
        gridUnit.addEventListener('mouseenter', () => {
                checkMouseDown();
                if (mouseDown == true) {
                gridUnit.classList.add('colored-grid-unit');
                }
        }); 
    });
}

function deletePrevGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
        gridUnits.pop();
    }
}

function properlySizeGrid() {
    gridUnits.forEach(gridUnit => {
        gridUnit.style = 
        `width: ${GRIDCONTAINERSIZE/Math.sqrt(numOfColumnsRows)}px; 
        height: ${GRIDCONTAINERSIZE/Math.sqrt(numOfColumnsRows)}px;`;
    });
}


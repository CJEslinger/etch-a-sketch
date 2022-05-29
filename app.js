const sizeChanger = document.querySelector('button');
sizeChanger.addEventListener('click', () => {createGridUnits();})

const GRIDCONTAINERSIZE = 400;
const gridContainer = document.querySelector('.grid-container');
gridContainer.style = `width: ${GRIDCONTAINERSIZE}px; height: ${GRIDCONTAINERSIZE}px;`
let gridUnit = document.createElement('div');
let gridUnits = [];

let numOfColumnsRows = 10;
const STARTINGROWSVALUE = Math.pow(numOfColumnsRows,2);
numOfColumnsRows = STARTINGROWSVALUE;
let currentColor = ('#ffffff');
createGridUnits(STARTINGROWSVALUE);

let mouseDown = false;
const checkMouseDown = () => gridContainer.addEventListener('mousedown', () => {mouseDown = true});
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
    if (startingSize != STARTINGROWSVALUE) {
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
        gridUnit.addEventListener('mouseover', () => {
                checkMouseDown();
                if (mouseDown == true) {
                gridUnit.classList.add('colored-grid-unit');
            }
        }); 
        gridUnit.addEventListener('mousedown', () => {
            gridUnit.classList.add('colored-grid-unit');
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


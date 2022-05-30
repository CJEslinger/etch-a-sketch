const sizeChanger = document.querySelector('button');
sizeChanger.addEventListener('click', () => {createGridUnits();})

const gridSizer = document.querySelector('.grid-sizer');
gridSizer.oninput = () => {createGridUnits()}

const colorSelector = document.querySelector('#color-selector');
let currentColor = colorSelector.value;
colorSelector.oninput = changeCurrentColor();

const GRIDCONTAINERSIZE = 400;
const gridContainer = document.querySelector('.grid-container');
gridContainer.style = `width: ${GRIDCONTAINERSIZE}px; height: ${GRIDCONTAINERSIZE}px;`
let gridUnit = document.createElement('div');
let gridUnits = [];

let numOfColumnsRows = gridSizer.value;
const STARTINGROWSVALUE = Math.pow(numOfColumnsRows,2);
numOfColumnsRows = STARTINGROWSVALUE;
createGridUnits(STARTINGROWSVALUE);

let mouseDown = false;
const checkMouseDown = () => gridContainer.addEventListener('mousedown', () => {mouseDown = true});
gridContainer.addEventListener('mouseup', () => {mouseDown = false})

let gridSize = () => {
    numOfColumnsRows = Math.pow(numOfColumnsRows, 2);
    return numOfColumnsRows
};

function changeCurrentColor () {
    currentColor = colorSelector.value;
}

function chooseGridSize () {
    //numOfColumnsRows = parseInt(prompt('Enter the number of rows.'));
    numOfColumnsRows = gridSizer.value;
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
        gridUnit.setAttribute('id', gridUnits.indexOf(gridUnit));
        gridUnit.addEventListener('mouseover', () => {
            checkMouseDown();
            if (mouseDown == true) {
                gridUnit.classList.add('colored-grid-unit');
                addCurrentColor(gridUnit);
            }
        }); 
        gridUnit.addEventListener('mousedown', () => {
            gridUnit.classList.add('colored-grid-unit');
            addCurrentColor(gridUnit);
        });
        
    });
    
}

function addCurrentColor(gUnit) {
    let unit = document.getElementById(`${gridUnits.indexOf(gUnit)}`)
    changeCurrentColor();
    unit.style = 
    `background-color: ${currentColor};
    width: ${GRIDCONTAINERSIZE/Math.sqrt(numOfColumnsRows)}px; 
    height: ${GRIDCONTAINERSIZE/Math.sqrt(numOfColumnsRows)}px;;`;
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


const gridContainer = document.querySelector('.grid-container');
const GRIDCONTAINERSIZE = 400;
gridContainer.style = `width: ${GRIDCONTAINERSIZE}px; height: ${GRIDCONTAINERSIZE}px;`
let numOfColumnsRows = 10;
let gridSize = (num) => {return Math.pow(num, 2);};
let currentColor = ('#ffffff');
let gridUnits = [];
const sizeChanger = document.querySelector('button');

createGridUnits(gridSize(numOfColumnsRows));
sizeChanger.addEventListener('click', () => {
    createGridUnits(gridSize(chooseGridSize()));})

function createGridUnits(size) {
    deletePrevGrid();
    for (let i = 0; i < size; i++) {
        const gridUnit = document.createElement('div');
        gridContainer.appendChild(gridUnit);
        gridUnit.classList.add('grid-unit');
    }
    gridUnits = document.querySelectorAll('.grid-unit');
    properlySizeGrid(gridUnits, size);
}

function deletePrevGrid() {
    if (gridUnits.length !== 0) {
        gridUnits.forEach(gridUnit => {
            gridUnit.classList.remove('.grid-unit');
        });
    }
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function properlySizeGrid(gridUnits, size) {
    gridUnits.forEach(gridUnit => {
        gridUnit.style = 
        `width: ${GRIDCONTAINERSIZE/Math.sqrt(size)}px; 
        height: ${GRIDCONTAINERSIZE/Math.sqrt(size)}px;`;
    });
}

function chooseGridSize () {
    return parseInt(prompt('Enter the number of rows.'));
}
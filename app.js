const gridContainer = document.querySelector('.grid-container');
const GRIDCONAINERSIZE = 400;
let numOfColumnsRows = 16;
let gridSize = (num) => {return Math.pow(num, 2)};

createGridUnits(gridSize(numOfColumnsRows));

function createGridUnits(size) {
    for (let i = 0; i < size; i++) {
        const gridUnit = document.createElement('div');
        gridContainer.appendChild(gridUnit);
        gridUnit.classList.add('grid-unit');
    }
    properlySizeGrid();
}

function properlySizeGrid() {
    let gridUnits = document.querySelectorAll('.grid-unit');
    gridUnits.forEach(gridUnit => {
        gridUnit.style = `width: ${GRIDCONAINERSIZE/numOfColumnsRows}px; height: ${GRIDCONAINERSIZE/numOfColumnsRows}px;`;
    });
}
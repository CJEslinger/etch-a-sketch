const gridContainer = document.querySelector('.grid-container');
const GRIDCONAINERSIZE = 400;
let numOfColumnsRows = 30;
let gridSize = (num) => {return Math.pow(num, 2)};

createGridUnits(gridSize(numOfColumnsRows));
function createGridUnits(size) {
    for (let i = 0; i < size; i++) {
        const gridUnit = document.createElement('div');
        gridContainer.appendChild(gridUnit);
        gridUnit.classList.add('grid-unit');
    }
    let gridUnits = document.querySelectorAll('.grid-unit');
    properlySizeGrid(gridUnits);
    console.log(gridUnits);

}

function properlySizeGrid(gridArray) {
    gridArray.forEach(box => {
        box.style = `width: ${GRIDCONAINERSIZE/numOfColumnsRows}px; height: ${GRIDCONAINERSIZE/numOfColumnsRows}px;`;
    });
}
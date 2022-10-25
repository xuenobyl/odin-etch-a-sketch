function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
}

function createCell(currentRow) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    currentRow.appendChild(cell);
}

function removeGrid() {
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {container.removeChild(row);
    });
    console.log("removed");
}

function etch() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(element => {
        element.addEventListener("mouseover", () => {element.classList.add("mouseover")});
    });
}

function createGrid(cellsPerSide) {
    while (cellsPerSide > 100 || cellsPerSide === 0 || isNaN(cellsPerSide)) {
        cellsPerSide = + prompt(`Come on mate,\n\nLESS THAN 100 PLEEEASE.\nAnd numbers only.\nAnd not zero either.\nJeez...`);
    }
    for (i = 0; i < cellsPerSide; i++) {
        createRow();
    }
    //fill each row with cells
    const rows = document.querySelectorAll(".row");
    for (let row of rows) {
        for (i = 0; i < cellsPerSide; i++) {
            createCell(row);
        }
    }
    etch();
}


//start running from here

const container = document.querySelector(".container");
let inputPerSide =  30;
createGrid(inputPerSide);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    removeGrid();
    createGrid(+ prompt("How many cells per side? (enter number between 1-100)"));
});





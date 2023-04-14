const DEFAULT_ROWS = 10;
const DEFAULT_COLUMNS = 10;
const SLIDER_MAX = 50;
const SLIDER_MIN = 1;

let currentRows = DEFAULT_ROWS;
let currentColumns = DEFAULT_COLUMNS;


function updateGrid(rows, columns) {

  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 0fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 0fr)`;
  let cellCount = 1;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = cellCount++;

      gridContainer.appendChild(cell);

      cell.addEventListener("mouseover", () => {

        const r = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        cell.style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
      });
    }
  }
}

function initGrid(rows, columns) {
  const rowSlider = document.getElementById("rowSlider")
  const columnSlider = document.getElementById("columnSlider")
  const rowValue = document.getElementById("rowValue");
  const columnValue = document.getElementById("columnValue");



  rowSlider.addEventListener("input", (event) => {
    currentRows = event.target.value;
    updateGrid(event.target.value, currentColumns)
    rowValue.textContent = currentRows;
  })

  columnSlider.addEventListener("input", (event) => {
    currentColumns = event.target.value;
    updateGrid(currentRows, event.target.value)
    columnValue.textContent = currentColumns;
  })
  rowSlider.value = DEFAULT_ROWS;
  rowSlider.max = SLIDER_MAX;
  columnSlider.value = DEFAULT_COLUMNS;
  columnSlider.max = SLIDER_MAX;
  rowValue.textContent = DEFAULT_ROWS;
  columnValue.textContent = DEFAULT_COLUMNS;

  updateGrid(rows, columns)

}

initGrid(DEFAULT_ROWS, DEFAULT_COLUMNS)
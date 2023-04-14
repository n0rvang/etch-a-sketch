const DEFAULT_ROWS = 10;
const DEFAULT_COLUMNS = 10;
const MAX = 100;

function createGrid(gridHeight, gridLength) {
  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, 0fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridLength}, 0fr)`;
  let cellCount = 1;
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridLength; j++) {
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
createGrid(DEFAULT_ROWS, DEFAULT_COLUMNS)
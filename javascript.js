function createGrid() {
  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gridContainer.appendChild(cell);
    }
  }
}
createGrid()

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "red";
  })
})

cells.forEach(cell => {
  cell.addEventListener("mouseout", () => {
    cell.style.backgroundColor = "grey";
  })
})

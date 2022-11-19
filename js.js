const container = document.getElementById("container");
let item = container.children;

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "rgb(0, 255, 217)";
    });
    container.appendChild(cell).className = "grid-item";
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

makeRows(16, 16);

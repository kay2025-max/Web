const socket = io();
const board = document.getElementById("board");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  cell.addEventListener("click", () => {
    socket.emit("move", i);
  });
  board.appendChild(cell);
}

socket.on("update", ({ index, symbol }) => {
  board.children[index].innerText = symbol;
});

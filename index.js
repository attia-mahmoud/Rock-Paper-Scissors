let selections = document.querySelectorAll(".options");
const main = document.querySelector("main");
const score = document.querySelector("#count");

function getSelections() {
  selections = document.querySelectorAll(".options");
}

setInterval(getSelections, 1000);

selections.forEach((selection) => {
  selection.addEventListener("click", function () {});
});

function select(event) {
  const playerMove = playerTurn(event);
  const computerMove = computerTurn();
  const result = playRound(playerMove, computerMove);
  setTimeout(function () {
    switch (result) {
      case 1:
        count.innerText = parseFloat(count.innerText) + 1;
        gameOver("YOU WIN");
        break;
      case -1:
        gameOver("YOU LOSE");
        break;
      default:
        gameOver("ITS A TIE");
        break;
    }
  }, 1000);
}

function computerTurn() {
  el = document.createElement("div");
  el.classList.add("options", "empty");
  main.appendChild(el);
  const computerMove = computerPlay();
  setTimeout(function () {
    el.classList.remove("empty");
    el.classList.add(computerMove);
    createCaption(el, "The House Picked");
  }, 1000);
  return computerMove;
}

function playerTurn(selection) {
  main.classList.remove("main-background");
  const id = selection.dataset.id;
  selection.style["grid-column"] = "1 / 2";
  selection.style["grid-row"] = "1 / 2";
  createCaption(selection, "You Picked");
  selections.forEach((selection) => {
    if (selection.dataset.id != id) selection.style.display = "none";
  });
  return id;
}

function createCaption(el, text) {
  const caption = document.createElement("p");
  caption.classList.add("caption");
  caption.innerText = text;
  el.appendChild(caption);
}

function gameOver(msg) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");
  div.classList.add("gameover");
  p.classList.add("result");
  p.innerText = msg;
  button.classList.add("playagain");
  button.innerText = "PLAY AGAIN";
  button.onclick = () => reset();
  div.appendChild(p);
  div.appendChild(button);
  main.appendChild(div);
}

function reset() {
  main.innerHTML = "";
  main.classList.add("main-background");
  addSelection("paper");
  addSelection("scissors");
  addSelection("rock", "1 / 3");
}

function addSelection(data, position = 0) {
  const el = document.createElement("div");
  el.classList.add("options", data);
  el.dataset.id = data;
  el.setAttribute("onclick", "select(this)");
  position && el.classList.add("rock-position");
  main.appendChild(el);
}
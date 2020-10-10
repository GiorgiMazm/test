import TicTacToe from "./TicTacToe.js";
export default function() {
  for (const elem of TicTacToe.item) {
    elem.firstElementChild.textContent = "";
  }

  if (TicTacToe.counter % 2 !== 0) {
    TicTacToe.player.textContent = "first";
  }
  TicTacToe.counter = 0;
}

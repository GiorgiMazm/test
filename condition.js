import TicTacToe from "./TicTacToe.js";
export default function() {
  setTimeout(() => {
    // cross

    if (
      TicTacToe.item[0].firstElementChild.textContent === "x" &&
      TicTacToe.item[1].firstElementChild.textContent === "x" &&
      TicTacToe.item[2].firstElementChild.textContent === "x"
    )
      alert("first player win");
    else if (
      TicTacToe.item[3].firstElementChild.textContent === "x" &&
      TicTacToe.item[4].firstElementChild.textContent === "x" &&
      TicTacToe.item[5].firstElementChild.textContent === "x"
    )
      alert("first player win");
    else if (
      TicTacToe.item[6].firstElementChild.textContent === "x" &&
      TicTacToe.item[7].firstElementChild.textContent === "x" &&
      TicTacToe.item[8].firstElementChild.textContent === "x"
    )
      alert("first player win");
    else if (
      TicTacToe.item[0].firstElementChild.textContent === "x" &&
      TicTacToe.item[3].firstElementChild.textContent === "x" &&
      TicTacToe.item[6].firstElementChild.textContent === "x"
    )
      alert("first player win");
    else if (
      TicTacToe.item[1].firstElementChild.textContent === "x" &&
      TicTacToe.item[4].firstElementChild.textContent === "x" &&
      TicTacToe.item[7].firstElementChild.textContent === "x"
    )
      alert("first player win");
    else if (
      TicTacToe.item[2].firstElementChild.textContent === "x" &&
      TicTacToe.item[5].firstElementChild.textContent === "x" &&
      TicTacToe.item[8].firstElementChild.textContent === "x"
    )
      alert("first player win");
    else if (
      TicTacToe.item[0].firstElementChild.textContent === "x" &&
      TicTacToe.item[4].firstElementChild.textContent === "x" &&
      TicTacToe.item[8].firstElementChild.textContent === "x"
    )
      alert("first player win");
    else if (
      TicTacToe.item[2].firstElementChild.textContent === "x" &&
      TicTacToe.item[4].firstElementChild.textContent === "x" &&
      TicTacToe.item[6].firstElementChild.textContent === "x"
    )
      alert("first player win");
    // zeros
    else if (
      TicTacToe.item[0].firstElementChild.textContent === "0" &&
      TicTacToe.item[1].firstElementChild.textContent === "0" &&
      TicTacToe.item[2].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (
      TicTacToe.item[3].firstElementChild.textContent === "0" &&
      TicTacToe.item[4].firstElementChild.textContent === "0" &&
      TicTacToe.item[5].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (
      TicTacToe.item[6].firstElementChild.textContent === "0" &&
      TicTacToe.item[7].firstElementChild.textContent === "0" &&
      TicTacToe.item[8].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (
      TicTacToe.item[0].firstElementChild.textContent === "0" &&
      TicTacToe.item[3].firstElementChild.textContent === "0" &&
      TicTacToe.item[6].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (
      TicTacToe.item[1].firstElementChild.textContent === "0" &&
      TicTacToe.item[4].firstElementChild.textContent === "0" &&
      TicTacToe.item[7].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (
      TicTacToe.item[2].firstElementChild.textContent === "0" &&
      TicTacToe.item[5].firstElementChild.textContent === "0" &&
      TicTacToe.item[8].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (
      TicTacToe.item[0].firstElementChild.textContent === "0" &&
      TicTacToe.item[4].firstElementChild.textContent === "0" &&
      TicTacToe.item[8].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (
      TicTacToe.item[2].firstElementChild.textContent === "0" &&
      TicTacToe.item[4].firstElementChild.textContent === "0" &&
      TicTacToe.item[6].firstElementChild.textContent === "0"
    )
      alert("second player win ");
    else if (TicTacToe.counter >= 9) alert("no one win");
  }, 20);
}

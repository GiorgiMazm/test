import condition from "./condition.js";
import TicTacToe from "./TicTacToe.js";
import restart from "./restart.js";

// create a uniq event for each item of game and add all funtional
for (const elem of TicTacToe.item) {
  elem.addEventListener("click", function addValue(evt) {
    const event = evt.target;
    const value = event.firstElementChild;

    // stop event if this field was clicked
    if (value === "x" || value === "0") return;

    //add delay for correct working of result of game
    condition();

    if (TicTacToe.counter % 2 === 0) {
      value.textContent = "x";
    } else {
      value.textContent = "0";
    }

    TicTacToe.counter++;

    // game result
    if (TicTacToe.counter % 2 === 0) {
      TicTacToe.player.textContent = "first";
    } else TicTacToe.player.textContent = "second";
  });
}

//  add a restart option for game where all values are empty
TicTacToe.restart.addEventListener("click", () => {
  restart();
});
//  end

const q = "salam";
console.log(q.padEnd(100));

//1st column: A = ROCK, B = PAPER, C = SCISSORS
//2nd column: X = ROCK, Y = PAPER, Z = SCISSORS
//score: 1 = ROCK, 2 = PAPER, 3 = SCISSORS
// 0 = LOST, 3 = DRAW, 6 = WON

import fs from "fs";

const data = fs.readFileSync("input.txt", "utf-8");
const rounds = data.split("\n");
const strategyMap = rounds.map((round) => {
  const data = round.split(" ");

  const map = {
    X: "A",
    Y: "B",
    Z: "C",
  };
  data[1] = map[data[1]];
  return data;
});

const result = strategyMap.reduce((acc, curr) => {
  const [elf, player] = curr;

  //score
  const mapping = {
    A: 1,
    B: 2,
    C: 3,
  };

  acc += mapping[player];

  //draw
  if (elf === player) {
    acc += 3;
  }

  //win
  if (
    (player === "B" && elf === "A") ||
    (player === "C" && elf == "B") ||
    (player === "A" && elf === "C")
  ) {
    acc += 6;
  }

  return acc;
}, 0);

console.log(result);

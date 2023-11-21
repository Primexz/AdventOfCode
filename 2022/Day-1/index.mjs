import fs from "fs";

let data = fs.readFileSync("input.txt", "utf-8");

data = data
  .split("\n\n")
  .map((elv) => elv.split("\n").map((calory) => parseInt(calory, 10)));

const out = data.reduce((acc, curr) => {
  acc.push(curr.reduce((acc, curr) => acc + curr, 0));
  return acc;
}, []);

console.log("highest calory: ", Math.max(...out));

console.log(
  "top 3: ",
  out
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3)
    .reduce((acc, cur) => acc + cur, 0)
);

import fs from "fs";

let data = fs.readFileSync("input.txt", "utf-8");
data = data
  .split("\n\n")
  .map((elv) => elv.split("\n").map((calory) => parseInt(calory, 10)));

const out = data.reduce((acc, curr) => {
  acc.push(curr.reduce((acc, curr) => acc + curr, 0));
  return acc;
}, []);

console.log(Math.max(...out));

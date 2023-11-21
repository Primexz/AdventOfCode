import fs from "fs";

let data = fs.readFileSync("input.txt", "utf-8");

data = data
  .split("\n\n")
  .map((elv) => elv.split("\n").map((calory) => parseInt(calory, 10)));

let out = [];
data.forEach((elv) => {
  out.push(
    elv.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0)
  );
});

console.log("highest calory: ", Math.max(...out));

const sortedOut = out.sort((a, b) => a - b).reverse();
console.log(
  "top 3: ",
  sortedOut.slice(0, 3).reduce((acc, cur) => acc + cur, 0)
);

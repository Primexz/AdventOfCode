import fs from "fs";

const data = fs.readFileSync("input.txt", "utf-8").split("\n");
const parsed = data.map((line) => line.split(""));

const cnt = parsed.reduce((acc, line) => {
  const num = line.filter((char) => {
    return Number.isInteger(parseInt(char));
  });

  let outNum = "";

  if (num[0]) {
    outNum += num[0];
  }

  if (!num[1]) {
    outNum += num[0];
  } else {
    outNum += num.slice(-1)[0];
  }

  acc += parseInt(outNum);

  return acc;
}, 0);

console.log(cnt);

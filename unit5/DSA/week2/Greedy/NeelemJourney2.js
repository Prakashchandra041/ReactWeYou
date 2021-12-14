//not complete wrong answer coming (this solution is present in editorial)

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let data = input[1].trim().split(" ").map(Number);
    let totalcost = 0
  let currentbuscost=data[0];
  for (let i = 1; i < n; i++) {
      currentbuscost = Math.min(currentbuscost, data[i]);
      totalcost += currentbuscost;
    }
    totalcost += currentbuscost;
  console.log(totalcost);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10
13 4 17 17 19 1 7 18 20 7`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

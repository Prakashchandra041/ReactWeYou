// SLIDING WINDOW TECHNIQUE IMPORTANT



function TakeMax(n, k, data) {
  let sum = 0;
  let max = -99999;
  for (let i = 0; i < k; i++) {
    sum += data[i];
  }
for (let i = k; i <= n; i++) {
    sum = sum + data[i] - data[i - k];
    if (sum > max) {
      max = sum;
    }
    
  }
  console.log(max);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let data = input[1].trim().split(" ").map(Number);
  TakeMax(n, k, data);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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

function findMaxSubArray(data, n) {
    let maxSum = data[0];
    let temp = data[0];
    let currSum = 0;
    for (let i = 1; i < n; i++){
        currSum = temp + data[i];
        temp = Math.max(data[i], currSum);
        maxSum = Math.max(temp, maxSum);
    }
    console.log(maxSum);
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i = i + 2) {
    let n = +input[i];
    let data = input[i + 1].trim().split(" ").map(Number);
    findMaxSubArray(data, n);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
4
-1 -2 -3 -4`);
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

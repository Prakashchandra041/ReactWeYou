function findMaxSubArray(data, n) {
  let maxEleHere = 0;
  let maxEleSoFar = -99999;

  for (let i = 0; i < n; i++) {
    maxEleHere = maxEleHere + data[i];
    // if (maxEleHere < data[i]) {
    //     maxEleHere = data[i];
    // }
    maxEleHere = Math.max(maxEleHere, data[i]);
    // if (maxEleSoFar < maxEleHere) {
    //     maxEleSoFar = maxEleHere;
    // }
    maxEleSoFar = Math.max(maxEleSoFar, maxEleHere);
  }

  return console.log(maxEleSoFar);
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

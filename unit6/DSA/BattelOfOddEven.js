function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < n; i++){
        if (data[i] % 2 === 0) {
            sumEven += data[i];
        } else {
            sumOdd += data[i];
        }
    }
    if (sumOdd > sumEven) {
        console.log("Odd");
    } else {
        console.log("Even");
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
1 2 3 4`);
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

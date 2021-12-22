function FindSquareRoot(n) {
    if (n == 0 || n == 1) {
        return console.log()
    }
    let ans = 0
    let i = 0;
    while (ans < n) {
      i++
        ans = i * i;
    }
    return console.log(i-1)

}

function runProgram(input) {
  let data = input.trim().split("\n");
  for (let i = 1; i < data.length; i++) {
    let n = +data[i];
    FindSquareRoot(n);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
9
8`);
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

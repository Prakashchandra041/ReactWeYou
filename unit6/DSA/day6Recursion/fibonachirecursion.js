function runProgram(input) {
    let n = +input;
    function findFibonaci(n) {
        if (n === 0) {
            return 0;
        }
        else if (n === 1) {
            return 1;
        }
        return findFibonaci(n - 1) + findFibonaci(n - 2);
    }

    console.log(findFibonaci(n));
}
if (process.env.USERNAME === "hp") {
  runProgram(`4`);
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

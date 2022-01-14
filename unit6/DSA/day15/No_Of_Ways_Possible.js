function findWays(n) {
    if (n == 0) {
        return 1;
    } else if (n < 0) {
        return 0;
    }

    sum = findWays(n - 1) + findWays(n - 2) + findWays(n - 3);
    return sum;
}

function runProgram(input) {
    let n = +input;
    console.log(findWays(n));
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

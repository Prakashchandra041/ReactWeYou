function checkways(n) {
    if (n == 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }

    return checkways(n-1)+checkways(n-3)+checkways(n-4)
}


function runProgram(input) {
    let data = +input;
    console.log(checkways(data))
}
if (process.env.USERNAME === "hp") {
  runProgram(`5`);
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

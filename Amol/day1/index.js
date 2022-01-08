function runProgram(input) {
    // let n = +input;
    // for (let i = 1; i <= n; i++){
    //     let res = ""
    //     for (let j = 1; j < n;j++)
    // }
    
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

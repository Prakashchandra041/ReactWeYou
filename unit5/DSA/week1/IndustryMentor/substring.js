function runProgram(input) {
    let data="aman"
    let i = 0;
    let n = data.length - 1;

    for (let i = 0; i <= n; i++){
        let substr = "";
        
    }

    return console.log("substing does not contain given input value")
}
if (process.env.USERNAME === "hp") {
  runProgram(`ama`);
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

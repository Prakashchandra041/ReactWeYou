function runProgram(input) {
    let n = +input-1;
    for (let i = 0; i <= n; i++){
        let res = "";
        for (let j = 0; j <= n; j++){
            if (i == 0 || i == n || j == 0 || j == n) {
                res += "* ";
            } else {
                res += "  ";
            }
        }
        console.log(res);
    }
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

function runProgram(input) {
    input = +input;
    for (let i = 1; i <= 5; i++){
        let res=" "
        for (let j = 1; j <= i; j++){
            res += "* ";
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

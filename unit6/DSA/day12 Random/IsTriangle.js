function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    for (let i = 1; i <= n;i++){
        let [a, b, c] = input[i].trim().split(" ").map(Number);
        if (a + b > c && b + c > a && c + a > b) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2
`);
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

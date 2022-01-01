function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++){
        let n = +input[i];
        function findProfit(n) {
            if (n === 0) {
                return 1;
            }
            else if (n < 0) {
                return 0;
            }
            return findProfit(n - 4) + findProfit(n - 8);
        }
        
        console.log(findProfit(n));
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
12`);
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

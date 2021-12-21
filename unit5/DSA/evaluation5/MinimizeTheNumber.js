function runProgram(input) {
    input = input.trim().split("\n");
    let TestCase = +input[0];
    for (let i = 1; i <= TestCase; i++){
        let data = input[i].split("").sort((a, b) => b - a);
        if (data[0] === "-") {
            data = data.sort((a, b) => b - a)
            console.log(data.join(""))
        }
        else {
        
            data = data.sort((a, b) => a - b);
            console.log(data.join(""));
        }
    }
  
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
53334121
-1002911
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

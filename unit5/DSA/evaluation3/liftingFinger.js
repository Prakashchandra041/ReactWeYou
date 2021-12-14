function countLifting(data) {
    let len = data.length;
    let count = 0;
    for (let i = 0; i < len; i++){
        if (data[i] !== data[i + 1]) {
            count++;
       }
    }
    console.log(count);
}


function runProgram(input) {
    input = input.trim().split("\n");
    let testCase = +input[0];
    for (let i = 1; i <= testCase; i++){
        let data = input[i].trim().split("");
        countLifting(data)
    }
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
aaaaa
abbbaaz`);
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

function countLift(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++){
        if (data[i] !== data[i + 1]) {
            count++;
        }
    }
    console.log(count);
}


function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    for (let i = 1; i <= n; i++){
        let data = input[i].trim().split("");
        countLift(data);
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

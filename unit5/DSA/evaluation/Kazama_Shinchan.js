function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let key = +input[2];

    for (var i = 0; i < n; i++){
        if (data[i] >= key) {
            break;
        }
    }

    console.log(i);
  
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
1 3 5 6
5 `);
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

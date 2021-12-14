function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let obj = {};
    for (let i = 0; i < n; i++){
        if (obj[data[i]] == undefined) {
            obj[data[i]]=1
        } else {
            obj[data[i]]++
        }
    }
    let res = "";
    for (key in obj) {
        res += obj[key] + " ";
    }
    console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10
0 1 0 1 1 1 0 2 2 0 `);
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

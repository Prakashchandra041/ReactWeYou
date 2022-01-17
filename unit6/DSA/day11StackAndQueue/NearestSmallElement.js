function nearestSmallEle(data, n) {
  //  27 11 4 1 4 24 1 -1 
  // 39 27 11 4 24 32 32 1
  let l = 0;
  let r = n - 1;
  let stack = [];
  let res = [];
  for (let i = r; i >= 0; i--){
    while (stack.length !== 0 && stack[stack.length - 1] >= data[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      res.push(-1);
    } else {
      res.push(stack[stack.length - 1]);
    }
    stack.push(data[i]);
  }
  console.log(res.reverse().join(" "));
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i = i + 2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        nearestSmallEle(data, n);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
8
39 27 11 4 24 32 32 1`);
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

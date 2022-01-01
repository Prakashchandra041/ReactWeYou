function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  // console.log(n,arr)
  var stack = [];
  var res = "";

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length == 0) {
      res += -1 + " ";
    } else {
      res += stack[stack.length - 1] + " ";
    }
    stack.push(arr[i]);
  }
  // -1 -1 -1 -1 4 24 24 -1
  console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`8
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

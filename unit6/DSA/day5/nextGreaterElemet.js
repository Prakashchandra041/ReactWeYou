function nextGreaterElement(data, n) {
    let stack = [];
    let res = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length !== 0 && stack[stack.length - 1] <= data[i]) {                                                        
        stack.pop();
      }
      if (stack.length == 0) {
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
     for (let i = 1; i < input.length; i = i + 2) {
       let n = +input[i];
       let data = input[i + 1].trim().split(" ").map(Number);
       nextGreaterElement(data, n);
     }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
6
8 8 10 3 8 3`);
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

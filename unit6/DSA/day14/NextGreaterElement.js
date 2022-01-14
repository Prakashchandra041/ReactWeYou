function findNextGreater(n, data) {
    let stack = [];
    let result = [];

    for (let i = n - 1; i >= 0; i--){
        
        while (stack.length !== 0 && stack[stack.length - 1] <= data[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }

        stack.push(data[i]);
    }

    console.log(result.reverse().join(" "));
}




function runProgram(input) {
     input = input.trim().split("\n");
    for (let i = 1;i< input.length; i += 2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        findNextGreater(n, data);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
9
5 6 1 3 0 3 1 8 4`);
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

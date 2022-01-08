function runProgram(input) {
  input = input.trim().split("\n");
  let Queue = [];
  for (let i = 1; i < input.length; i++) {
    let value = input[i].trim().split(" ");
    if (value[0] === "Push") {
      Queue.push(value[1]);
    } else if (value[0] === "Pop" && Queue.length === 0) {
      console.log("Empty");
    } else if (value[0] === "Pop") {
      let x = Queue.pop();
      console.log(x);
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
Push 4
Push 5
Pop`);
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

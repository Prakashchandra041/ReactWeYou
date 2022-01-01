function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  let n = +input[line];
  line++;
  let arr = input[line].trim().split(" ").map(Number);
  line++;
  let noOfQ = +input[line];
  line++;
  let queries = input[line].trim().split(" ").map(Number);
  for (let i = 0; i < noOfQ; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (queries[i] == arr[j]) {
        console.log("YES");
        break;
      } else if (j == arr.length - 1) console.log("NO");
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
1 2 3 4 5
3
3 5 7`);
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

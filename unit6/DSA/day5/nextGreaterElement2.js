function nextGreaterElement(data, n) {
  let res = "";
  for (let i = 0; i < data.length; i++) {
    //time complexity is hight see another apprach;
      // this is brut force approach 
    for (let j = i; j < data.length; j++) {
      if (data[j] > data[i]) {
        res += data[j] + " ";
        break;
      } else if (j == data.length - 1) {
        res += "-1" + " ";
      }
    }
  }
  console.log(res);
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

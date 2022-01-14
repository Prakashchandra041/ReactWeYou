function odd_SubSet(str, data, left, right,count) {
    if (left <= right + 1 && str != "") {
        let subStr = str.trim().split("").map(Number);
        let sum = 0;
        for (let i = 0; i < subStr.length; i++){
            sum += subStr[i];
        }
        if (sum % 2 == 1) {
            count++;
        }
        console.log("count", count);
  }

  for (let i = left; i <= right; i++) {
    odd_SubSet(str + data[i], data, i + 1, right,count);
    }
       
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let data = input[1].trim().split(" ").map(Number);
  let str = "";
  let left = 0;
    let right = n - 1;
    let count = 0;
    odd_SubSet(str, data, left, right, count);
    console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
1 2 3`);
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

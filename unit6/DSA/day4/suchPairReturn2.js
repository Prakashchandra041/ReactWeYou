// Time complexity O(n)

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i = i + 2) {
    let [n, q] = input[i].trim().split(" ").map(Number);
      let data = input[i + 1].trim().split(" ").map(Number).sort((a, b) => a - b);
      let flag = false;
      let l = 0;
      let r = n - 1;
      while (l < r) {
          if (data[l] + data[r] === q) {
              flag = true;
              break;
          }
          else if (data[l] + data[r] > q) {
              r--;
          }
          else {
              l++;
          }      
    }

    if (flag) {
      console.log("1");
    } else {
      console.log("-1");
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
6 0
5 -6 5 5 3 0`);
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

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let data = input[1].trim().split(" ").map(Number);
  let key = 1;
  let left = 0;
  let right = n - 1;
  let index="-1";
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
      if (data[mid] === key) {
          index = mid;
          right = mid - 1;
    } else if (data[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return console.log(index)
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
0 0 0 0 0`);
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

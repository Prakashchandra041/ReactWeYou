function runProgram(input) {
      input = input.trim().split("\n");
      const [len, key] = input[0].trim().split(" ").map(Number);
      const data = input[1]
        .trim()
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

      let low = 0;
      let high = len - 1;
      let mid;
      let ans = "-1";

      while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        if (data[mid] <= key) {
          low = mid + 1;
        }
        else {
          ans = mid;
          high = mid - 1;
        }
      }
      console.log(ans);
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`10 2
0 2 2 2 2 5 7 7 9 10`);
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

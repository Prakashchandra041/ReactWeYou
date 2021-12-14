function runProgram(input) {
    input = input.trim().split("\n");
    const len = +input[0];
    const data = input[1].trim().split(" ").map(Number);
    const key=+input[2]

  let low1 = 0;
  let high1 = len - 1;
  let mid1;
  let ans1 = "-1";

  while (low1 <= high1) {
    mid1 = Math.floor(low1 + (high1 - low1) / 2);
    if (data[mid1] == key) {
      ans1 = mid1;
      high1 = mid1 - 1;
    } else if (data[mid1] > key) {
      high1 = mid1 - 1;
    } else {
      low1 = mid1 + 1;
    }
  }
  let low2 = 0;
  let high2 = len - 1;
  let mid2;
  let ans2 = "-1";

  while (low2 <= high2) {
    mid2 = Math.floor(low2 + (high2 - low2) / 2);
    if (data[mid2] <= key) {
      low2 = mid2 + 1;
    } else {
      ans2 = mid2;
      high2 = mid2 - 1;
    }
    }
    if (ans2 == -1) {
        ans2 = data.length;
    }
    let start = ans1;
    let end = ans2-1
    let total = ans2 - ans1;

    console.log(start,end,total);
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`6
1 1 1 2 2 2	
1`);
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

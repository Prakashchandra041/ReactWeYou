// Sliding Window technique O(n);
function subArraySum(data, n, k) {
  let left = 0;
  let right = 0;
  let curSum = data[right];
  // console.log(data, n, k, );
  while (right < n && left < n) {
    // console.log("right", right, "left", left, "curSum", curSum);
    if (curSum === k) {
      return "Yes";
    } else if (curSum < k) {
      left++;
      curSum += data[left];
    } else if (curSum > k && left < n) {
      curSum = curSum - data[right];
      right++;
    }
  }

  return "No";
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i = i + 2) {
    const [n, k] = input[i].trim().split(" ").map(Number);
    const data = input[i + 1].trim().split(" ").map(Number);
    console.log(subArraySum(data, n, k));
    // console.log("data", data, "n", n, "k", k);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
6 33
1 4 20 3 10 5`);
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

//Brut Force O(n**2);

function subArraySum(data, n, k) {
  for (let i = 0; i < n; i++) {
      let curSum = data[i];
      
      for (let j = i + 1; j < n; j++) {
          if (curSum === k) {
              return console.log("Yes");
           }
          if (curSum > k || j == n) {
              break;
          }
          curSum += data[j];
        }  
  }

  return console.log("No");
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i = i + 2) {
    const [n, k] = input[i].trim().split(" ").map(Number);
    const data = input[i + 1].trim().split(" ").map(Number);
    subArraySum(data, n, k);
    // console.log("data", data, "n", n, "k", k);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
2 1
3 1`);
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

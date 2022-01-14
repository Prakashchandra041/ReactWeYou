
function RotateArray(data, n, k) {
    let res = [];
    k = k % n;
    for (let i = 0; i < n; i++){
        res[i]=data[(i-k+n)%n]
    }
    console.log(res.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i = i + 2) {
    let [n, k] = input[i].trim().split(" ").map(Number);
    let data = input[i + 1].trim().split(" ").map(Number);
    RotateArray(data, n, k);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
2 1
1 2
2 2
1 2
3 1
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

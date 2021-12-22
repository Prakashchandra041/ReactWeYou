function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let array = input[1].trim().split(" ").map(Number);
    let answer = "";
    k = k % n;
    for (let i = 0; i < n; i++){
        answer += array[(n + i + k) % n] + " ";
    }
    console.log(answer);
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`6 4
1 2 5 4 0 6`);
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

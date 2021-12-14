function runProgram(input) {
    input = input.trim().split("\n");
    let [n, cost] = input[0].trim().split(" ").map(Number);
    let shop = input[1].trim().split(" ").map(Number).sort((a, b) => a - b);
    let totalSum = 0;
    let count = 0;
  for (let i = 0; i < n; i++){
    if (totalSum >= cost) {
      return console.log(count);
    } else {
      count++;
      totalSum += shop[i];
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`4 10
5 4 2 4`);
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

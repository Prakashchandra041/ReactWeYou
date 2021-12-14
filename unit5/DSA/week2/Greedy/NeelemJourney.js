function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let min = data[0];
    let sum = min;
    for (let i = 1; i < n; i++){
        if (min <= data[i]) {
            sum+=min
        }
        else {
            min = data[i];
            sum += min;
        }
    }
    // sum += min;
    console.log(sum);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10
13 4 17 17 19 1 7 18 20 7`);
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

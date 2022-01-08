function weightedSum(data, n) {
    let sum = 0;

    for (let i = 0; i < n; i++){
        sum += (i + 1) * data[i];
    }
    console.log(sum);
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i+=2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        weightedSum(data,n)
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5
1 2 3 4 5
2
100 1`);
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

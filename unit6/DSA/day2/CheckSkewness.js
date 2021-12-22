function checkSkewness(n) {
    let odddiv = 0;
    let evendiv = 0;
    for (let i = 1; i <= n; i++){
        if (i % 2 === 0 && n % i === 0) {
            evendiv++;
        } else if (i % 2 === 1 && n % i === 0) {
            odddiv++;
        }
    }

    if (odddiv > evendiv) {
        console.log("Odd Skewed");
    }
    else if (evendiv > odddiv) {
        console.log("Even Skewed");
    } else {
        console.log("Not Skewed");
    }
}

function runProgram(input) {
    input = input.trim().split("\n").map(Number);
    for (let i = 1; i < input.length; i++){
        checkSkewness(input[i])
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
4
6
11
`);
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

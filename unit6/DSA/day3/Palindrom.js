function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split("");
    let l = 0;
    let r = n - 1;
     
    while (l < r) {
        if (data[l] !== data[r]) {
            console.log("No");
            return;
        }
        l++;
        r--;
    }
    console.log("Yes");
    return;
}
if (process.env.USERNAME === "hp") {
  runProgram(`6
nrupul`);
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

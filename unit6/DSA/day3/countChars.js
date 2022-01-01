function runProgram(input) {
    let data = input.trim().split("");
    let res = "";
    for (var i = 0; i < data.length; i++) {
      let count = 1;
      while (i + 1 < data.length && data[i] ==data[i+1]) {
        i++;
          count++; 
      }
        res += data[i] + count;
    }

    console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`aaabbbbcc`);
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

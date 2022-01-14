function runProgram(input) {
    let str = input.trim().split("");
    let res = "";
    let i = 0;
    while (i < str.length) {
        if (str[i] == str[i + 1]) {
            i=i+2
        } else {
            res += str[i];
            i++;
        }
    }
    if(res.length!=0)
        console.log(res);
    else
        console.log("Empty String")
}
if (process.env.USERNAME === "hp") {
  runProgram(`aaabccddd`);
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

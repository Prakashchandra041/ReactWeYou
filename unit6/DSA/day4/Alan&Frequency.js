function runProgram(input) {
    input = input.trim().split("\n");
    let data = input[1].trim().split("").sort();
  
    let obj = {};
    for (let i = 0; i < data.length; i++){
        if (obj[data[i]] == undefined) {
            obj[data[i]] = 1;
        } else {
            obj[data[i]]++;
        }
    }

    for (key in obj) {
        console.log(key + "-" + obj[key]);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
zaman`);
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

function runProgram(input) {
    let data = input.trim().split("");
    let obj = {};
    for (let i = 0; i < data.length; i++){
        if (obj[data[i]] == undefined) {
            obj[data[i]]=1
        } else {
            let pre = obj[data[i]];
            obj[data[i]] = pre + 1;
        }
    }
    let flag = true;
    for (key in obj) {
        if (obj[key] > 1) {
            flag = false;
       }
    }

    if (flag) {
        console.log("Unique");
    }
    else {
        console.log("No")
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`masai`);
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

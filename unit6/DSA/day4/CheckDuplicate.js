function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i = i + 2){
        let n = +input[i];
        let data = input[i+1].trim().split(" ").map(Number);
        let obj = {};
        for (let i = 0; i < data.length; i++) {
          if (obj[data[i]] == undefined) {
            obj[data[i]] = 1;
          } else {
            obj[data[i]]++;
          }
        }
        let flag = false;
        for (key in obj) {
            if (obj[key] > 1) {
                flag = true;
            }
        }
        if (flag) {
            console.log("YES");
        }
        else {
            console.log("NO");
        }

    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
1
1
2
1 1
3
1 2 3`);
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

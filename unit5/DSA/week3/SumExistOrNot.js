function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let k=+input[2]
    for (let i = 0; i < n; i++){
        let sub = [];
        for (let j = i; j < n; j++){
            sub.push(data[j]);
            let sum = 0;
            console.log(sub)
            for (let i = 0; i < sub.length; i++){
                sum += sub[i];
            }
            console.log(sum);
            if (sum == k) {
                return console.log("yes");
            }
        }
    }
    return console.log("no");
}
if (process.env.USERNAME === "hp") {
  runProgram(`6
3 34 4 12 5 2
9`);
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

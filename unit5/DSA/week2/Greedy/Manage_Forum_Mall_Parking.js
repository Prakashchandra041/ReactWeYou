function runProgram(input) {
    input = input.trim().split("\n");
    let k = +input[0];
    let data1 = input[1].trim().split(" ").map(Number);
    let data2 = input[2].trim().split(" ").map(Number);
    let count = 0;
    for (let i = 1; i < data1.length; i++){
        if(data1[i]<=data2[i-1]){
            count++;
            if (count === k) {
                console.log(count)
                return console.log("Not Possible");
            }
        }
    }
    console.log(count);
    return console.log("Possible");
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
4 3 6 7 11
9 4 10 9 14`);
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

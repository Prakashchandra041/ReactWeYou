function findPeak(data, n) {
    let max = data[0];
    let index;
    for (let i = 0; i < n; i++){
        if (data[i] > max) {
            max = data[i];
            index = i;
        }
    }
    console.log(index);
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        findPeak(data, n);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
3
10 20 11
5
1 3 6 5 4`);
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

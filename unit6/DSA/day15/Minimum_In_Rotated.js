function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);

    let l = 0;
    let r = data.length - 1;

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        
        if (data[mid] > data[r]) {
            l = mid+1;
        } else {
            r = mid-1;
        }
    }

    return console.log(data[l]);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10
4 6 7 9 10 -1 0 1 2 3`);
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

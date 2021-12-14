function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let people = input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let value = 0;
    let list;
    for (let i = 0; i < n - 2; i++){
        list = people[i + 2] - people[i];
        if (list > value) {
            value = list;
             
        }
    }
   console.log(value);
}
if (process.env.USERNAME === "hp") {
  runProgram(`8
1 2 3 4 5 6 7 8`);
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

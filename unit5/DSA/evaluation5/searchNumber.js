function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let NoTest = +input[2];
    let result=""
    for (let i = 3; i < input.length; i++){
        const [L, R] = input[i].trim().split(" ").map(Number);
         let count = 0;
        for (let i = 0; i < n; i++){
            if (data[i] >= L && data[i] <= R) {
                count++
            }
        }  
        result += count + " ";
    }
    console.log(result);
   
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
10 1 10 3 4
4
1 10
2 9
3 4
2 2
`);
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

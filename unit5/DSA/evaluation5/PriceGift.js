function runProgram(input) {
    input = input.trim().split("\n");
    const [n, p] = input[0].trim().split(" ").map(Number);
    const atm = input[1].trim().split(" ").map(Number).sort((a, b) => b - a);
    let sum = 0;
    let count = 0;
    console.log(atm)
    for (let i = 0; i < atm.length; i++){
        if (sum <= p) {
            sum += atm[i]; 
            count++;
        }
        
    }
    console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3 11
1 5 7`);
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

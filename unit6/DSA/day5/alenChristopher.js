function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++){
        let data = input[i].trim().split("");
        let stack = [];
        for (let j = 0; j < data.length; j++){
            if (data[j] == "#") {
                stack.pop();
            }
            else {
                stack.push(data[j]);
            }
        }
        console.log(stack.join(""))
    }

}
if (process.env.USERNAME === "hp") {
  runProgram(`2
ab#d
a#bc`);
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

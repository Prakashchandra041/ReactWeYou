function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i=i+2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number).sort((a, b) => a - b);
        if (data[0] === 0) {
            for (let i = 0; i < data.length; i++){
                if (data[0] < data[i]) {
                    let temp = data[0];
                    data[0] = data[i];
                    data[i] = temp;
                    break;
                }
            } 
        }
         console.log(data.join(""));
    }
    // console.log(input);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
4
2 1 0 0
4
1 4 2 3
4
5 2 3 2`);
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

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i=i+2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ");;
        let res="";
        for (let i = 0; i < n; i++){
            for (let j = i; j < n; j++){
                if (data[i] > data[j]) {
                    res += data[j] + " ";
                    break;
                }
            }
        }
        res += "-1";
        console.log(res)
    }
   
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
8
39 27 11 4 24 32 32 1`);
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

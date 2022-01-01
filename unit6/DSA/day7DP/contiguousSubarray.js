function findMaxSubArray(data, n) {
    let max = -999;
    let result;
    for (let i = 0; i < n; i++){
        let res = [];
        for (let j = i; j < n; j++){
            res.push(data[j]);
            let sum = 0;
            for (let k = 0; k < res.length; k++){
                sum += res[k];
            }
            max = Math.max(sum, max);
            
        }
    }
    console.log(max);
}


function runProgram(input) {
  input = input.trim().split("\n");
    for (let i = 1; i < input.length; i=i+2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        findMaxSubArray(data, n);
    }
  
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
3
1 2 3`);
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

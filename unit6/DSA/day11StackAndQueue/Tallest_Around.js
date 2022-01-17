function findTallest(n, k, data) {
    let res = "";
    for (let i = 0; i <= n - k; i++){
        let max = data[i];
        for (let j = 0; j < k; j++){
            if (max < data[i + j]) {
                max = data[i + j];
            }
        }
        // console.log("max", max);
         res += max + " ";
    }
    console.log("res",res);
}



function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i+=2){
        let [n, k] = input[i].trim().split(" ").map(Number);
        let data = input[i + 1].trim().split(" ").map(Number);
        findTallest(n, k, data);
    }
    
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
9 3
1 2 3 1 4 5 2 3 6`);
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

function checkGoodPair(data, n) {
   
    let count=0
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (data[i] == 2 * data[j]) {
                count++
            }
        }
    }
    console.log(count);
}



function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i=i+2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        checkGoodPair(data,n)
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5
1 1 1 1 1
6
1 1 2 2 4 1 `);
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

// Time complexity O(n2)


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i = i + 2){
        let [n, q] = input[i].trim().split(" ").map(Number);
        let data = input[i + 1].trim().split(" ").map(Number);
        let flag = false;
        for (let i = 0; i < n; i++){
            for (let j = i + 1; j < n; j++){
                if (data[i] + data[j] === q) {
                    flag = true;
                }
            }
        }

         if (flag) {
           console.log("1");
         } else {
           console.log("-1");
         }
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
5 2
3 4 0 2 7`);
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

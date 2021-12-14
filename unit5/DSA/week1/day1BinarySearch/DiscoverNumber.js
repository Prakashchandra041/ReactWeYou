function runProgram(input) {
    input = input.trim().split("\n")
    const [len, noOfKeys] = input[0].trim().split(" ").map(Number);
    const data= input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);

    for (let i = 2; i < noOfKeys + 2; i++){
          let low = 0;
          let high = len - 1;
          let key = +input[i];
          let mid;
        checkBinaryEach(data, low, high, key)
        
        function checkBinaryEach(data, low, high, key) {
             while (low <= high) {
               mid = Math.floor(low + (high - low) / 2);
               if (data[mid] == key) {
                 return console.log("Yes");
               } else if (data[mid] > key) {
                 high = mid - 1;
               } else if (data[mid] < key) {
                 low = mid + 1;
               }
             }

             return console.log("NO");
        }
         
    }

}
if (process.env.USERNAME === "hp") {
  runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
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

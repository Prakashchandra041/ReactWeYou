function runProgram(input) {
    input = input.trim().split("\n")
    const [len, key] = input[0].trim().split(" ").map(Number);
    const data = input[1].trim().split(" ").map(Number).sort((a,b)=>a-b)

    let low = 0;
    let high = len - 1;
    let mid 
    
    while (low <= high) {
        mid = Math.floor(low + (high-low) / 2);
        if (data[mid] == key) {
          return console.log("1");
        } else if (data[mid] > key) {
            high = mid - 1;
        } else if (data[mid] < key) {
            low=mid+1
        }
        
    }
      
    return console.log("-1");
}
if (process.env.USERNAME === "hp") {
  runProgram(`5 0
2 -2 0 3 4`);
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



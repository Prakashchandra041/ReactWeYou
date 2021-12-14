function binarySearch(data, high, low, key) {
    
    if (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)

        if (data[mid] == key) {
            return 1;
        }
        if (data[mid] < key) {
          return  binarySearch(data, high, mid + 1, key);
        }
        if (data[mid] > key) {
          return  binarySearch(data, mid-1 , low, key);
        }
    }
    
    return -1

}

function runProgram(input) {
  input = input.trim().split("\n");
  const [len, key] = input[0].trim().split(" ").map(Number);
  const data = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let low = 0;
  let high = len - 1;
  console.log(binarySearch(data, high, low,key));

}
if (process.env.USERNAME === "hp") {
  runProgram(`5 0
2 -2 1 3 4`);
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

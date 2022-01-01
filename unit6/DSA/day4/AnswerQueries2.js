function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  let n = +input[line];
  line++;
  let arr = input[line].trim().split(" ").map(Number);
  line++;
  let noOfQ = +input[line];
  line++;
    let queries = input[line].trim().split(" ").map(Number);
    let obj = {};
    for (let i = 0; i < n; i++){
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }
    for (let i = 0; i < noOfQ; i++){
        if (obj[queries[i]] == undefined) {
          obj[queries[i]] = 1;
        } else {
          obj[queries[i]]++;
        }
    }

    for (key in obj) {
        for (let i = 0; i < noOfQ; i++){
        
            if (queries[i] == key && obj[key] > 1) {
                console.log("YES")
            }
            else if (queries[i] == key && obj[key] == 1) {
                console.log("NO")
            }
        }
    }

}
if (process.env.USERNAME === "hp") {
  runProgram(`5
1 2 3 4 5
3
3 5 7`);
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

function qulifying(n, k, data) {
    let count = 0;
    let obj = {};
    console.log(data);
      for (let i = 0; i < n; i++) {
        if (obj[data[i]] == undefined) {
          obj[data[i]] = 1;
        } else {
          obj[data[i]]++;
        }
    }
    console.log(obj)
    for (key in obj) {
        if (obj[key] > k) {
            console.log(obj[key])
            break;
        }
        
    }
}



function runProgram(input) {
    input = input.trim().split("\n");
    let testCase = +input[0];
    for (let i = 1; i < input.length;i=i+2){
        let [n, k] = input[i].trim().split(" ").map(Number);
        let data = input[i + 1].trim().split(" ").map(Number).sort((a, b) => b - a);
        qulifying(n,k,data)
    }
}
if (process.env.USERNAME ==="hp") {
    runProgram(`1
7 3
2 2 2 2 3 3 1`);
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
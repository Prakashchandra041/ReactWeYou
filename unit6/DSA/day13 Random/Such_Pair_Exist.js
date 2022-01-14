function sum_Exist(n, k, data) {
    
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (data[i] + data[j] == k) {
            return console.log(1);
        }
        else if (data[i] + data[j] > k) {
            j--;
        } else {
            i++
        }
    }
    return console.log(-1);
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let [n, k] = input[i].trim().split(" ").map(Number);
        let data = input[i+1].trim().split(" ").map(Number).sort((a,b)=>a-b);

        sum_Exist(n, k, data);
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

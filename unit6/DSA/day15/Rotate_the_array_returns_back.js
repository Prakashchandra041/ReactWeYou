function reverse(data, i, j) {
    while(i<j){
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        i++;
        j--;
    }
}
function RotateArray(data, n, k) {
    reverse(data, 0, n - 1);
    reverse(data, 0, k - 1);
    reverse(data, k, n - 1);
     console.log(data.join(" "))
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i = i + 2){
        let [n, k] = input[i].trim().split(" ").map(Number);
        let data = input[i + 1].trim().split(" ").map(Number);
        RotateArray(data, n, k);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
2 1
1 2
2 2
1 2
3 1
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

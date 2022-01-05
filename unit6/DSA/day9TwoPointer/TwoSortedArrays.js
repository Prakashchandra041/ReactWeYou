function twoPointer(n, arr1, arr2) {
    let i = 0;
    let j = n - 1;
    let count = 0;
    while (i<n &&j>=0) {
        if (arr1[i] == arr2[j]) {
          count++;
          i++;
          j--;
        } else if (arr1[i] > arr2[j]) {
          j--;
        } else if (arr1[i] < arr2[j]) {
          i++;
        }
    }
    console.log(count);
}
 
function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i = i + 3){
        let n = +input[i];
        let arr1 = input[i + 1].trim().split(" ").map(Number);
        let arr2 = input[i + 2].trim().split(" ").map(Number);
        twoPointer(n, arr1, arr2);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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

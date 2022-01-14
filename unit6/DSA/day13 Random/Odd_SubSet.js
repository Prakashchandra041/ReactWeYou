function odd_SubSet(str,data,left,right) {
  if (left < right + 1 && str != "") {
    console.log("str", str);
  }  

  for (let i = left; i <= right; i++){
    odd_SubSet(str+data[i],data,left+1,right)
  }

}


function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
  let data = input[1].trim().split(" ").map(Number);
  let str = "";
  let left = 0;
  let right = n - 1;
    odd_SubSet(str,data,left,right);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
-8 -4 1`);
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



function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
  let data = input[1].trim().split(" ").map(Number);
  let str = "";
  let left = 0;
  let right = n - 1;
  var count = 0;
   
  function odd_SubSet(str, data, left, right) {
    
    if (left <= right + 1 && str != "") {
     
      let ndata = str.trim().split("");
      let sum = 0;
      for (let i = 0; i < ndata.length; i++) {
        if (ndata[i] !== '-') {
            sum += ndata[i];
        }
      }
      if (sum % 2 == 1) {
        count++;
      }
    }

    for (let i = left; i <= right; i++) {
      odd_SubSet(str + data[i], data, i + 1, right);
    }
  }

  odd_SubSet(str, data, left, right);
  console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
-1 -2 -3`);
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

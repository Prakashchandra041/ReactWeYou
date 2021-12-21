function FindSquareRoot(n) {
    let l = 0;
    let r = n;
    let mid
    let ans
    while (l<=r) {
        mid = parseInt((l + r) / 2)
        if (mid * mid === n) {
            ans = mid;
            break;
        }
        
        else if (mid * mid < n) {
            l = mid + 1;
             ans = mid;
        }
        else {
            r = mid - 1;
        }
        
    }
    console.log(ans);
}



function runProgram(input) {
    let data = input.trim().split("\n");
    for (let i = 1; i < data.length; i++){
        let n = +data[i];
        FindSquareRoot(n);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
9
8`);
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

function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i = i + n+1){
    var n = +input[i];
    let 
    for (let j = i + 1; j <= i + n; j++){
      
    }
    }


}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc
`);
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

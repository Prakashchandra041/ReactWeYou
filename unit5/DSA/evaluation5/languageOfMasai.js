function runProgram(input) {
  input = input.trim().split("\n");
  var data = input[1];
  var n = +input[0];
  if (
    data[0] === "a" ||
    data[0] === "e" ||
    data[0] === "i" ||
    data[0] === "o" ||
    data[0] === "u"
  ) {
    data = data + "hulk";
  } else {
    data = data + "thor";
  }
  console.log(data);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
abced`);
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

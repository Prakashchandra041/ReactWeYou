function runProgram(input) {
  input = input.trim().split("\n");
  const [n, k] = input[0].trim().split(" ").map(Number);
  let data = input[1];
  let count = 0;
  for (let i = 0; i <= n - k + 1; i++) {
    let str = data.slice(i, i + k); // abc  bcd cde

    let obj = {};

    for (let j = 0; j < str.length; j++) {
      if (obj[str[j]] !== undefined) {
        break;
      } else {
        obj[str[j]] = 1;
      }
    }

    if (Object.keys(obj).length == k) {
      count++;
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4 3
abcde`);
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

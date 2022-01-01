function permutation(str, l, r) {

  if (l == r) {
   return console.log(str);
    }
  else {

      for (let i = l; i <= r; i++) {
        str = swap(str, l, i);
        permutation(str, l + 1, r);
      }
    }
  
}
function swap(a, b, c) {
  let arr = a;
  let temp = arr[b];
  arr[b] = arr[c];
  arr[c] = temp;
  return arr;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
    let str = input[1].trim().split(" ");
  permutation(str, 0, n - 1);
}

if (process.env.USERNAME === "hp") {
  runProgram(`3
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

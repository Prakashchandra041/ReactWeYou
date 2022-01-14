function runProgram(input) {
  const ip = input.split(/[\r\n]+/);

  const [size, K] = ip[0].split(" ").map(Number);

  const arr = ip[1].split(" ").map(Number);

  console.log(check(arr, K));

  function check(arr, K) {
    let l = 0;

    let h = arr.length - 1;

    while (l < h) {
      let mid = l + Math.floor((h - l) / 2);

      if (arr[mid] > arr[h]) {
        l = mid + 1;
      } else {
        h = mid;
      }
    }

    let min = l;
    l = 0;
    h = arr.length - 1;

    if (arr[min] <= K && K <= arr[h]) {
      l = min;
    } else {
      h = min;
    }

    while (l <= h) {
      let mid = Math.floor((l + h) / 2);

      if (arr[mid] == K) {
        return mid;
      }
      if (arr[mid] < K) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
    return -1;
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5 1
3 4 5 1 2`);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}

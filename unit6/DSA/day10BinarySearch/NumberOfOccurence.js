function runProgram(input) {
    input = input.trim().split("\n");
    const [n, k] = input[0].trim().split(" ").map(Number);
    let data = input[1].trim().split(" ").map(Number);
    let index1;
    let index2
    let left1 = 0;
    let right1 = n - 1;
    while (left1 <= right1) {
        let mid1 = left1 + Math.floor((right1 - left1) / 2);
        if (data[mid1] === k) {
            index1 = mid1;
            right1 = mid1 - 1;
        }
        else if (data[mid1] < k) {
            left1 = mid1 + 1;
        } else {
            right1 = mid1 - 1;
        }
    }


    let left2 = 0;
    let right2 = n - 1;
    while (left2 <= right2) {
        let mid2 = left2 + Math.floor((right2 - left2) / 2);

      if (data[mid2] === k) {
        index2 = mid2;
        left2 = mid2 +1;
      } else if (data[mid2] > k) {
        right2 = mid2 - 1;
      } else {
        left2 = mid2 + 1;
      }
    }


    console.log(index2-index1+1);
}
if (process.env.USERNAME === "hp") {
  runProgram(`6 3
2 3 3 3 6 9`);
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

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let data = input[1].trim().split(" ").map(Number);
    let l = 0;
    let r = data.length - 1;

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);

        if (data[mid] > data[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    
    let min = l;
    l = 0;
    h = data.length - 1;

    if (data[min] <= k && data[h] >= k) {
        l = min;
    } else {
        h = min - 1;
    }


    while (l <= h) {
        let mid = l + Math.floor((h - l) / 2); 
        if (data[mid] == k) {
            return console.log(mid);
        }
        else if (data[mid] > k) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return console.log(-1);

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
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

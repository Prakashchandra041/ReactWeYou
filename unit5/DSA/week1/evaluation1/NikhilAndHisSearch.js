function chekc(data, type, q) {
    let count = 0;
    let l = 0;
    let h = data.length - 1;
  let mid
  
  if (type == 0) {
    while (l <= h) {
      mid = Math.floor((l + h) / 2);
      if (data[mid] < q) {
        l = mid + 1;
      } else {
        l = l + 1;
        count++;
      }
    }
    console.log(count);
  }
  else {
    
  }
    



    // if (type == 0) {
    //     for (let i = 0; i < data.length; i++){
    //         if (data[i] >= q) {
    //             count++
    //         }
    //     }
    // }
    // else {
    //     for (let i = 0; i < data.length; i++){
    //         if (data[i] > q) {
    //             count++
    //         }
    //     }
    // }

    // return count;
}



function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let noOfQ = +input[2];
    for (let i = 3; i < noOfQ+3; i++){
        let [type, q] = input[i].trim().split(" ").map(Number);
        console.log(chekc(data, type, q));
    }

}
if (process.env.USERNAME === "hp") {
  runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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

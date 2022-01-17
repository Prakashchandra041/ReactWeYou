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

// function check_count(res) {
//     let obj = {};
//     for (let i = 0; i < res.length; i++){
//         if (obj[res[i]] == undefined) {
//             obj[res[i]] = 1;
//         } else {
//             obj[res[i]]++
//         }
//     }

//     let key_count = 0;
//     for (key in obj) {
//         key_count++;
//     }
//     if (key_count == 2) {
//         console.log('obj with 2 uniqu key ', obj)
//         return true;
//     } else {
//         console.log("obj WITH OUT2 uniqu key ", obj);
//         return false;
//     }
// }

// function runProgram(input) {
//     input = input.trim().split("\n");
//     let [n, k] = input[0].trim().split(" ").map(Number);
//     let data = input[1].trim().split("");
//     let count = 0;
//     for (let i = 0; i < n;i++){
//         let res = [];
//         for (let j = i; j < n; j++){
//             res.push(data[j]);
//             let val = check_count(res)
//             if (val) {
//                 count++
//             }
//         }
//     }
//     console.log(count);
// }
// if (process.env.USERNAME === "hp") {
//   runProgram(`4 2
// aman`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

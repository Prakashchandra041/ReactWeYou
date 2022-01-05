//Brut Force O(n**3);

function subArraySum(data, n, k) {
    for (let i = 0; i < n; i++){
        let arr = [];
        for (let j = i; j < n; j++) {
            arr.push(data[j]);
            // let sum = 0;
            // for (let i = 0; i < arr.length; i++) {
            //     sum += arr[i];
            // }
            // if (sum === k) {
            //     return console.log("Yes");
            // }
          console.log(arr)
        }
    }

    return console.log("No")
}



function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i = i + 2){
        const [n, k] = input[i].trim().split(" ").map(Number);
        const data = input[i + 1].trim().split(" ").map(Number);
         subArraySum(data,n,k)
       // console.log("data", data, "n", n, "k", k);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
4 3
1 2 3 4`);
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

function Differece_Of_K(n, k, data) {
   var i = 0;
   var j = 0;
   while (i < n && j < n) {
     if (data[j] - data[i] === k && i !== j) {
       return "Yes";
     } else if (data[j] - data[i] > k) {
       i++;
     } else {
       j++;
     }
   }
   return "No";
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let [n, k] = input[i].trim().split(" ").map(Number);
        let data = input[i+1].trim().split(" ").map(Number);

       console.log( Differece_Of_K(n, k, data));
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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

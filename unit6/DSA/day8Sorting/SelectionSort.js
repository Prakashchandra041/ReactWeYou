function swapData(data, a, b) {
  let temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}


function SelectionSort(data, n) {
  
  for (let i = 0; i < n; i++){
    let min = i;
    for (let j = i; j < n; j++){
      if (data[min] > data[j]) {
        min = j;
      }
    }
    swapData(data,i,min)
  }

  console.log(data.join(' '));
} 

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let data = input[1].trim().split(" ").map(Number);
  SelectionSort(data, n);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
3 5 0 9 8`);
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

function sortTheAward(n, data) {
    let newArr = [];
    for (let i = 0; i < n; i++){
        if(data[i]===0)
        newArr.push(data[i])
    }
    for (let i = 0; i < n; i++) {
        if (data[i] === 1)
            newArr.push(data[i]);
    }
    for (let i = 0; i < n; i++) {
      if (data[i] === 2) newArr.push(data[i]);
    }

    console.log(newArr.join(" "));
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i+=2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        sortTheAward(n, data);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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

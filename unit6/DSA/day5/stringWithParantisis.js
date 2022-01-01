function runProgram(input) {
    let data = input.trim().split("");
    let stack = [];
    
    for (let i = 0; i < data.length; i++){
    
        if (data[i] === "{" || data[i] === "(" || data[i] === "[") {
          stack.push(data[i]);
        }  
       else if (data[i] == "}" && stack[stack.length - 1] !== "{" || data[i] == ")" && stack[stack.length - 1] !== "(" || data[i] == "]" && stack[stack.length - 1] !== "[") {
          stack.push(data[i]);
        }
        else if (data[i] == "}" && stack[stack.length - 1] == "{" || data[i] == ")" && stack[stack.length - 1] == "(" || data[i] == "]" && stack[stack.length - 1] == "[") {
            stack.pop();
      }
    
    }
    
    if (stack.length == 0) {
         console.log("balanced");
     }
    else {
        console.log("unbalanced");
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`{(([])[])[]]}`);
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

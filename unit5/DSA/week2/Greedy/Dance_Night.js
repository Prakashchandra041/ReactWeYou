function runProgram(input) {
    input = input.trim().split("\n");
    let noOfTest = +input[0];
    for (let i = 1; i < input.length; i=i+3){
        let [M, N] = input[i].trim().split(" ").map(Number);
        let man = input[i + 1].trim().split(" ").map(Number).sort((a, b) => a - b);
        let women = input[i + 2].trim().split(" ").map(Number).sort((a, b) => a - b);
        if (M > N) {
            return console.log("NO")
        }
        let a = 0;
        let j = 0;
        while (a<j) {
            if(man[a]>women[j]){
                a++;
                j++;
            } else {
                j++;
            }
        }
        if (a == M - 1) {
            return console.log("YES");
        }
        else {
            console.log("NO");
        }
       
    }
}
if (process.env.USERNAME ==="hp") {
    runProgram(`1
4 5
2 5 6 8
3 8 5 1 7`);
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
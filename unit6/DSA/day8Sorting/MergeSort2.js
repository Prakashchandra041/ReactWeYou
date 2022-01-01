function Merge(data, left, mid, right) {
    let num1 = mid - left + 1;                       //time complexsity O(nlog(n))  and space complexsity O(n);
    let num2 = right - mid;

    let leftArray = new Array(num1);
    let rightArray = new Array(num2);


    for (let i = 0; i < num1; i++){
        leftArray[i] = data[left + i];
    }
    for (let i = 0; i < num2; i++) {
        rightArray[i] = data[mid + 1 + i];
    }
    let i = 0;
    let j = 0;
    let k = left;

    while (i < num1 && j < num2) {
        if (leftArray[i] <= rightArray[j]) {
            data[k] = leftArray[i]; 
            i++;
        }
        else {
            data[k] = rightArray[j];
            j++;
        }
        k++;  
    }

    //remaining element
    while (i < num1) {
        data[k] = leftArray[i];
        i++;
        k++;
    }
     while (j < num2) {
       data[k] = rightArray[j];
       j++;
       k++;
     }
}

function FindMergeSort(data, left, right) {
    if (left >= right) {
        return; 
    }
    let mid = Math.floor((left + right) / 2);
    
    FindMergeSort(data, left, mid);
    FindMergeSort(data, mid + 1, right);
    Merge(data, left, mid, right)
}
function runProgram(input) {
  input = input.trim().split("\n"); 
    let n = +input[0]-1;
    let data = input[1].trim().split(" ").map(Number);
    let left = 0;
    let right = n;
    FindMergeSort(data, left, right)
    console.log( data.join(" "));


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

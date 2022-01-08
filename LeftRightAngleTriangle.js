let n = 5;
let res;
for (let i = 0; i < n; i++){
     res = "";
    for (let j = 0; j < n - i; j++){
        res += "  ";
    }
    for (let k = 0; k < i; k++){
        res += "* ";
    }
    console.log(res);
}


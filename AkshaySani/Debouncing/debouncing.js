let count = 0;

function getdata() {
    console.log("fetching data .....", count++);
}

function deboucingfun(fun, delay) {
     let timer;
    return function () {
        clearTimeout(timer);
      timer=  setTimeout(() => {
            fun();
        },delay)
    }
}



let inputData = deboucingfun(getdata, 300);
let condtion = true;


let prom = new Promise( (resolve, reject)=> {
    if (condtion) {
        resolve("Sucess from Promise");
    } else {
        reject("Reject form Promise");
    }
})


// let onfulfilment = 
// let onRejection = 

prom.then((result) => {
    console.log(result);
}).catch((error) => {
  console.log(error);
});
//executer
//state
// pending

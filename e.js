let obj = {
    name: "prakash",
    Age: 26,
}

function nameAge() {
    console.log(`${this.name} and Age is ${this.name}`)
}

let abc = nameAge.bind(obj);
abc();

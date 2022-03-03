function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    a = 300;
    y();
}

x();




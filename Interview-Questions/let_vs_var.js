
// let has block scope, so it only exists within the block where it is declared
// var has function scope, so it exists within the whole function

let x = function() {
    if(true) {
        var v = 2;
        let l = 1;
    }

    console.log(v);
    console.log(l);
}

x();

// recursive method
// but this just gets you the one number, not all successive numbers
function fibonacciRec(num) {    
    let sum = 0;
    if(num==1) 
        return 0; 
    if (num == 2) 
        return 1; 
    return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}
//console.log("Fibonacci(5): "+ fibonacciRec(5));

// uh this doesn't work...
function fibonacciIter(){
    let a = 1, b = 3, c;
    console.log('long lookup[] = {' + a + 'L' + b + 'L');
    c = 3 * (b - a);
    while ((c + a) / 3 == b) {
        console.log(', ' + c + 'L')
        a = b;
        b = c;
        c = 3 * b - a;
    }
    console.log(' };');
}

fibonacciIter()

function rFactorial(n) {
    
    if (n == 0) {
        return 1;
    } else {
        return n * rFactorial(n-1);
    }
}

console.log(rFactorial(10));
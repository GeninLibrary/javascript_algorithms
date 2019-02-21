function iFactorial(n){
    var product = 1;
    for (var i = 1; i <= n; i++) {
        product *= i;
    }
    console.log(product);
    return product;
};

iFactorial(5);





function rFactorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * rFactorial(n-1);
    }
}

console.log(rFactorial(5) * 1);         // rFactorial returns the factorial of 5 (120) -- multiplying by 1
                                        //                                                  reveals that
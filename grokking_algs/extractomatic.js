function extractDigit(num, dig) {                       // num = 4259, dig = 3  ---> searchedValue = 3
    var assortedvalues = [];                            //             dig = 0  ---> searchedValue = 9 
    var searchedValue;                                  //             dig = 2  ---> searchedValue = 2
                                                        
    while(num >= 10) {
        assortedvalues.unshift(num % 10);               // Alg repeatedly divides by 10 and stores remainder
        num = Math.floor(num/10);
    }
    assortedvalues.unshift(num);

    searchedValue = assortedvalues[assortedvalues.length-1-dig];
    console.log(assortedvalues);
    console.log(searchedValue);
    return assortedvalues;
}



extractDigit(1317,2);

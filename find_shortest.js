function findShort(s){

    var workArr = s.split(" ");                  // store substrings
    var shortest = workArr[0].length;            // set length of first element as base case
    
    for (var i = 1; i < workArr.length; i++) {   // test length of other values against base 
        if (workArr[i].length < shortest) {
            shortest = workArr[i].length;
        }
    } 
    console.log("This is the shortest:", shortest);
    return shortest;
};


 var test_string = "Hello there my friend";
 findShort(test_string);

 var test_string = "Bitcoin take over the world maybe who knows perhaps";
 findShort(test_string);

 
 
function findShort(s){                                                  // same functionality as above 
    return Math.min.apply(null, s.split(' ').map(w => w.length));       
}

findShort(test_string);
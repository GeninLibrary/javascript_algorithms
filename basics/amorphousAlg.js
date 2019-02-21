function isWordAlphabetic(str) {
    var arrCheck = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var arrArg = str.split("");     // ['h', 'e', 'l', 'l', 'o']
    console.log(arrArg);
    var counter = arrCheck.indexOf(arrArg[0]);  // index of 'h' --> 7

    for(var i = 1; i < arrArg.length; i++) {
        if(arrCheck.indexOf(arrArg[i])) {
            if(arrCheck.indexOf(arrArg[i]) < counter) {
                console.log("Not alphabetic")
                return false;
            } else {
                console.log(counter)
                counter = arrCheck.indexOf(arrArg[i]);
            }
        } else {
            console.log("this character doesn't exist in the alphabet")
            return false;
        }
    }
    return console.log("This string is alphabetic")
}

var firstStr = "hello";
isWordAlphabetic(firstStr); 

var secondStr = "abcfxy";
isWordAlphabetic(secondStr);


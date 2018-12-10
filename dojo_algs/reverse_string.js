// This is a function to reverse a string

function reverseStr(str) {
    var x = "";
    for (var i = str.length-1;i >= 0;i--){
        x += str[i];
    }
    return x;
}


// This is a function to replace characters in a string

function replaceChar(str,x,y) {
    var replacement = "";
    for (var i=0;i < str.length;i++) {
        if (str[i] == x) {
            replacement += y;
        } else {
            replacement += str[i]
        }
    }
    console.log(replacement);
}
        
function replacer(str) {
    var arr = [];
    function helper(newStr = '', idx = 0) {
        if (newStr.length == str.length) {
            arr.push(newStr);
            return;
        }
        if(str[idx] == '?') {
            helper(newStr + '0', idx+1)
            helper(newStr + '1', idx+1)
        }
        else {
            helper(newStr + str[idx], idx+1);
        }
    }
    helper();
    return arr;
}

console.log(replacer('do??y'));
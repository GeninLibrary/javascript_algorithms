function permute(str) {
    var chars = str.split("");
    var results = [];

    function mututate(chars, newWord=[]) {
        if(chars.length == 0) {
            results.push(newWord.join());
        } else {
            for(var i = 0; i < chars.length; i++) {
                chars.push(chars.shift());
                newWord.push(chars[0]);
                mututate(chars.slice(1), newWord);
                newWord.pop(); 
            }
        }
        mutate(chars);
    }
    return results;
}

permute("abc");




// Search a string and censor a "string" of characters within it

function censor(str,word) {
    var newStr = "";

    function helper(i) {
        var runner = 0;

        while(runner < word.length && i + runner < str.length) {
            if(str[i + runner] != word[runner]) {
                return false;
            }
            runner += 1;
        }
        return true;
    }

    for (var i =0; i < str.length; i++) {
        var results = helper(i);
        if(results == true) {
            for(var x = 0; x < word.length ; x++) {
                newStr += 'x';
            }
            i += word.length;
        }else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

censor('mommy','om');
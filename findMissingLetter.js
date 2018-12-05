function findMissingLetter(array){

    var capital_test = "False";
    if (array[0] == array[0].toUpperCase()) {
        console.log("NOTE: Array values are capitalized")
        capital_test = "True";
    }

    for (var x = 0; x < array.length; x++) {
        if (capital_test == "True") {
            array[x] = array[x].toLowerCase();
        }
        else {
            break;
        }
    }

    var alphabet_array = ("abcdefghijklmnopqrstuvwxyz").split("");
    var start = array[0];
    var count = array.length + 1;

    var alphabet_start = alphabet_array.indexOf(start);
    var alphabet_slice = alphabet_array.slice(alphabet_start, alphabet_start + count);

    for (var i = 0; i <= array.length; i++) {
        if (array.includes(alphabet_slice[i])) {
            console.log(alphabet_slice[i] + " is not the missing character");
        } else {
                if (capital_test == "True") {
                    console.log(alphabet_slice[i].toUpperCase() + " is the missing character")
                    return alphabet_slice[i].toUpperCase();
                } else {
                    console.log(alphabet_slice[i] + " is the missing character")
                    return alphabet_slice[i];
                }
            
        }
    }
}


var test_array = ['d','e','g']
findMissingLetter(test_array);
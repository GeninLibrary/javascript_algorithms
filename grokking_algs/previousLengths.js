function previousLengths (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (i == 0) {
            arr[i] = 0;
        } else {
            arr[i] = arr[i-1].length;
        }
    }
    console.log(arr);
}

var stringArr = ["hello", "goodbye", "Nathan", "Lisa", "Dan"];

previousLengths(stringArr);
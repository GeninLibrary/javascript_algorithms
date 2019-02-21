function reverseArr(arr) {
    for (var i=0; i < Math.floor(arr.length/2); i++) {
        var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
    return arr;
}

var numbers = [1,5,7,0,3,6];
reverseArr(numbers);
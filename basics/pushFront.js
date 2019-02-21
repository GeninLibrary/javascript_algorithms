function pushFront(arr, num) {
    for (var i = arr.length-1; i >= 0; i--) {
        arr[i +1] = arr[i];
        console.log(arr[i+1]);
    }
    arr[0] = num;
    console.log(arr);
    return arr;
}

var list = [1,2,3,4,5];

pushFront(list, 0);
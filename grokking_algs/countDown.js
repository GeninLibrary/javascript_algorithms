function countDown(x) {
    var newArr = [];
    while (x >= 0) {
        newArr.push(x);
        x--;
    }
    console.log(newArr);
    return newArr;
}

var productArr = countDown(7);

console.log("Hello");


function reverseCount(newArr) {
    var mid = Math.floor(newArr.length/2);
    var last = newArr.length-1;

    for (var i = 0; i <= mid; i++) {
        var temp = newArr[i];
        newArr[i] = newArr[last];
        newArr[last] = temp;
        last --;
    }
    console.log(newArr);
    return newArr;
}

reverseCount(productArr);
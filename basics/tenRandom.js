function tenRandom() {
    var arr = [];
    while (arr.length <= 10) {
        arr.push(Math.floor(Math.random() * 100));
    }
    console.log(arr);
    return arr;
}

tenRandom();
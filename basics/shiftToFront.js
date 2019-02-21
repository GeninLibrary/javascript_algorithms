function shiftToFront(arr) {
    for (var i=0; i <arr.length; i++) {
        if (i == 0) {
            continue;
        } else {
            arr[i-1] = arr[i];
        }
    }
    arr.pop();
    console.log(arr);
    return arr;
}

var groceries = ["cabbage", "tomato", "olive", "cheese"];

shiftToFront(groceries);
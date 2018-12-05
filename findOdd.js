// function findOdd(arr) {
//     // if arr[cur] == True increment; if arr[cur] == False add arr[cur] to {}
//     let instances = arr.reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
//     for (var i = 0; i < arr.length; i++) {
//         var number = arr[i];
//         if (instances[number] % 2 != 0) {
//             return console.log("THE NUMBER: " + number + " APPEARS AN ODD NUMBER OF TIMES")
//         };
//     }
// }

// var test_arr = [2,2,4,4,5,5,6,8,8,10,10,12,12,14,14,15,15];
// findOdd(test_arr);

// function below using an XOR Bitwise Operator (binary based) 
// to cancel out every value that occurs an even number of times
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

var test_arr = [2,2,4,4,5,5,6,8,8,10,10,12,12,14,14,15,15];
console.log(findOdd(test_arr));
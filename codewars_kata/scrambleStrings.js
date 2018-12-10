// function scramble(str1, str2) {

//     // Tests whether characters in string one can be rearranged 
//     // to match full string two

//     for (var i = 0; i < str2.length; i++) {
//         if (str1.includes(str2.charAt(i))) {
//             var str2_count = str2.split(str2.charAt(i)).length-1;
//             console.log(str2_count)
//             console.log("Str2 " + str2.charAt(i) + " count = " + str2_count)
//             var str1_count = str1.split(str2.charAt(i)).length-1;
//             console.log("Array of a's from str1", str1.split(str1.charAt(i)))
//             console.log(str1_count)
//             console.log("Str1 " + str2.charAt(i) + " count = " + str1_count)
//             if (str1_count >= str2_count) {
//                 console.log("Str1 CONTAINS EQUAL OR MORE " + str2.charAt(i) + " THAN Str2")
//                 continue;
//             } else {
//                 console.log("Str1 CONTAINS LESS " + str2.charAt(i) + "'s THAN Str2")
//                 return false;
//             }
//         } else {
//             console.log("Str1 DOES NOT CONTAIN ANY " + str2.charAt(i) + "'s")
//             return false
//         }
//     }
// console.log("Str1 CONTAINS ALL CHARACTERS IN Str2 AT EQUAL OR GREATER COUNT!")
// return true
// }

// var test_str1 = "scriptingjava"
// var test_str2 = "javascript"
// scramble(test_str1, test_str2)

function scramble(str1, str2) {
    // if arr[cur] == True increment; if arr[cur] == False add arr[cur] to {}
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {}); 
    // search for each character in str2 within occurences dictionary {}; decrement count as you go
    return str2.split("").every((character) => --occurences[character] >= 0);
}

var test_str1 = "scriptjavax"
var test_str2 = "javascript"
scramble(test_str1, test_str2)
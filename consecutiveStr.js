// function longestConsec(strarr) {
// // Parses an array of strings for two consecutive strings that 
// // concatenate to form the longest string 
// // ["Cat", "Cannon", "Hill", "Bunker"]
// // -----> CannonHill

//     var longest = strarr[0] + strarr[1];                    
//     var count = strarr[0].length + strarr[1].length;

//     for (var i = 1; i < strarr.length-1; i++) {
//         var test_longest = strarr[i] + strarr[i+1];
//         var test_count = test_longest.length;
//         if (test_count > count) {
//             longest = test_longest;
//             count = test_count;
//         }
//     }
//     console.log(longest);
//     return longest;
// }

// var test_array = ["Cat", "Cannon", "Hill", "Bunker"];
// longestConsec(test_array, 2);



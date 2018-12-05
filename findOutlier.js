// function findOutlier(integers){
// // Given an array that contains all even integers and one odd
// // or all odd integers and one even
// // return index of outlying integer

// var evenCount = [];
// var oddCount = [];
    
//     for (var i = 0; i <= integers.length-1; i++) {
//         if (integers[i] % 2 != 0) {                     // if value is odd
//             oddCount.push(i);                           // push index to oddCount array
//         }
//         else {                                          // if value is even
//             evenCount.push(i);                          // push index to evenCount array 
//         }
//     }

//     if (evenCount.length < oddCount.length) {          
//         var outlier_index = evenCount[0]  
//         console.log("The outlier is even, and this is its index: ", outlier_index)          
//         return integers[outlier_index];                 
//     }
//     else {
//         var outlier_index = oddCount[0]
//         console.log("The outlier is odd, and this is its index: ", outlier_index)
//         return integers[outlier_index];
//     }
// }

// var test_integers = [1,1,1,1,1,1,1,1,1,1,1,1,6];
// findOutlier(test_integers);


function findOutlier(int){
// Same functionality as above

    var even = int.filter(a=>a%2==0);
    console.log(even);
    var odd = int.filter(a=>a%2!==0);
    console.log(odd);
    return even.length==1? even[0] : odd[0];
  }

  var test_integers = [1,1,1,1,1,1,1,1,1,1,1,1,6];
  findOutlier(test_integers);
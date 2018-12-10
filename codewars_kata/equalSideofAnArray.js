// function findEvenIndex(arr) {

// // finds index in an array where sum of all values to the left
// // equal sum of all values to the right
// // [1,4,6,8,9,4,1,6,8] ---> equilibrium index here is 4
    
//     var total = arr.reduce((acc,val) => acc + val,0);     // total sum of array
//     var current_sum = 0;                                      // current sum as you iterate
//     var counter = 0                                           // index as you iterate
    
//    if (total-arr[0] == 0) {                                   // if array values in range (1 --> arr.length-1) == 0
//         console.log("All values after index 0 sum to 0")      // sum to 0
//         return counter;
//    }

//     while (counter != arr.length) {                                   // while index is within array
//         console.log("CURRENT VALUE TO LEFT OF INDEX =", current_sum)  // test sum of array values preceding index
//         console.log("TOTAL SUM - INDEXED VALUE. TO DETERMINE HALF...",1/2*(total - arr[counter]))  // against (total sum - arr[i])/2
//         console.log("INDEX",counter)
//         if (current_sum == 1/2*(total - arr[counter])) {
//             console.log("You've reached your equilibrium index")
//             console.log(counter)
//             return counter;
//         }
//         current_sum += arr[counter];
//         counter++;
        
//         if (counter == arr.length) {                        // if counter exceeds array's max index 
//             console.log("There is no equilbrium index")     // there is no equilibrium index
//             return -1;
//         } 
//     }
// }

// var test_array = [1,4,6,8,9,4,1,6,8];
// findEvenIndex(test_array);


function findEvenIndex(arr) {

// Same functionality as above
// Slices array into two segments and tests whethere their sums are equal

  for(var i=1; i<arr.length-1; i++) {
    
    // console.log("This is the sum to the left of the CURRENT index", arr.slice(0, i).reduce((a, b) =>  a+b))
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
        console.log("This is the sum to the left of the BALANCING index", arr.slice(0, i).reduce((a, b) =>  a+b))
        return i;
    }
  }
  return -1;
}

var test_array = [1,4,6,8,9,4,1,6,8];
findEvenIndex(test_array);
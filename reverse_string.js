// Each of the following functions reverse a string
// in a different way


/* INDEX

Basics
1 - conventional reverse
2 - reverse using built in's (split, reverse and join)
3 - reverse using spread operator
4 - recursion

Complex Exs
5 - reverse substrings with 5 or more characters



*/

// function reverse(str){                                      // 1 - Conventional method
//   let reversed = "";    
//   for (var i = str.length - 1; i >= 0; i--){        
//     reversed += str[i];
//   }  
//   console.log(reversed);  
//   return reversed;
// };

// var name = "My name is Nathan Diehl";
// reverse(name);



// function reverse(str){                                      // 2 - Javascript split(), reverse(), and join() built-ins 
//     return console.log(str.split("").reverse().join(""));
//   }

// var name = "My name is Nathan Diehl";
// reverse(name);
  
// function reverse(str){                                      // 3 - Using a "spread operator"
//     return console.log([...str].reverse().join(''));
//   }

// var name = "My name is Sarah Dogger";
// reverse(name);



// function reverse(str){                                      // 4 - Recursive approach #1
//     if(str === ""){
//      return str 
//     }else{
//      console.log(str[0]);                                   // logs first value in string
//      console.log(str.substr(1));                            // logs every other value in string
//      return reverse(str.substr(1)) + str[0]
//     }
//    }

//    var name = "My name is Jason Blogger";
//    reverse(name);

// function reverse(str){                                      // 4 - Recursive approach #2
//     if(str === ""){             // break case -
//      return str; 
//     }else{
//      console.log(str[str.length-1]);                      
//      return reverse(str.substr(0,str.length-1)) + str[str.length-1]
//     }
//    };

//     var name = "My name is Jason Blogger";
//     reverse(name);






// function spin_words(str) {                                              // 5 - First complext problem
// // Given a string "My name is Jason"
// // return the string "My name is nosanJ"  
// // --- i.e., reverse any substring 5 characters or longer 

//     let baseArr = str.split(" ");
//     let finalArr = [];                          
//     for (var i = 0; i <= baseArr.length-1; i++) {
//         if (baseArr[i].length >= 5) {                                     
//             let x = baseArr[i]; 
//             let new_str = "";
//             for (var t = x.length-1; t >= 0; t--) {          
//                 new_str += x[t];
//             }
//             finalArr.push(new_str); 
//         }
//         else {
//             finalArr.push(baseArr[i]);
//         }
//     }

//     let finished_str = finalArr.join(" ");
//     console.log(finished_str);
//     return finished_str;
// }

// test_string = "My name is Jason";
// spin_words(test_string);

// test_string = "Jebediah is the king of all saints";
// spin_words(test_string);

// test_string = "Seriously this is the last one";
// spin_words(test_string);

function spinWords(str) {                                              // 5 - First complext problem
    // Given a string "My name is Jason"
    // return the string "My name is nosanJ"  
    // --- i.e., reverse any substring 5 characters or longer 
    
        let baseArr = str.split(" ");
        let finalArr = [];                          
        for (var i = 0; i <= baseArr.length-1; i++) {
            if (baseArr[i].length >= 5) {                                     
                let x = baseArr[i]; 
                let new_str = "";
                for (var t = x.length-1; t >= 0; t--) {          
                    new_str += x[t];
                }
    //             console.log(new_str)
                finalArr.push(new_str); 
            }
            else {
                finalArr.push(baseArr[i]);
            }
        }
    
    let finished_str = finalArr.join(" ");
    console.log(finished_str);
    return finished_str;
    }

test_string = "Seriously this is the last one";
spinWords(test_string);


function spinWords(words){                                              // Same functionality as 5, but cleaner
    return words.split(' ').map(function (word) {                       
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');

    // splits the string into substrings                 "Hello I'm John"  ----> ["Hello", "I'm", "John"]

    // uses the map() to apply function(word)            if "Hello" > 4     ----> ['H','e','l','l','o']         
    // to every array element                                               ----> ['o','l','l','e','H']                                                                   
    //                                                                      ----> 'olleH'

    // join all values returned from function(word)
  }
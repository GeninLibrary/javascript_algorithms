// Recursion is a function that cycles through a callstack. 
// In simpler terms, recursion is a function that calls itslef until it meets its escape clause.

// Recursive functions need four things: base case, break case, logic, return statement.

function CountDown(x) {
    console.log(x);
    if (x == 0) {
        return
    }
    CountDown (x-1)
}

CountDown(10);

function beCheerful(x) {
    console.log("Be Cheerful!");
    if (x == 0) {
        return;
    }
    beCheerful(x-1);
}

beCheerful(98);
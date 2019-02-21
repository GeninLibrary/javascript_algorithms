function leapYear(x) {
    if (x % 4 == 0) {
        if (x % 100 == 0) {
            if (x % 400 == 0) {
                console.log("Leap Year");
            } else {
                console.log("Not Leap Year");
            }
        } else {
            console.log("Leap Year");
        }
    } else {
        console.log("Not Leap Year")
    }
}

leapYear(1000);






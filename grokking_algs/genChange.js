function genChange( x) {
    var q = 0;
    var d = 0;
    var n = 0;
    var p = 0;

    while (x > 0) {
        if ( x >= 25) {
            q = Math.floor(x/25);
            x = x % 25;
        }
        if ( x >= 10) {
            d = Math.floor(x/10);
            x = x % 10;
        }
        if ( x >= 5) {
            n = Math.floor(x/5);
            x = x % 5;
        }
        if ( x >= 1) {
            p = Math.floor(x/1);
            x = x % 25;
        }
    }

    console.log("You have " + q + " quarters");
    console.log("You have " + d + " dimes");
    console.log("You have " + n + " nickels");
    console.log("You have " + p + " pennies");
}

genChange(80);
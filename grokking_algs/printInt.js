function printInt() {
    var x = 2000;
    while (x > 1999){
        if (x > 5280) {
            break;
        } else {
            console.log(x);
            x++;
        }
    }
}

printInt();
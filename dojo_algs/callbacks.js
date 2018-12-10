function sky(x) {
    console.log("There are this many stars tonight");
    x();
    console.log("That's a lot of stars");
}

function starCount() {
    var x = 50;
    console.log(x);
}

sky(starCount); // pass in function starCount();

sky(function(){     // pass in unnammed, but also valid function();
    console.log(20);
});
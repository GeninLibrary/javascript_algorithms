function titleCase(title, minorWords) {
    if (! title) {
        return ''
    };
    
    var minor_array = minorWords.split(" ")
    for (var t = 0; t < minor_array.length; t++) {
        minor_array[t] = minor_array[t].toLowerCase();
    }
    console.log("This is your minor array: " + minor_array)
    
    console.log("Now capitalizing first word in title_array...")
    var title_array = title.split(" ");
    var first = title_array[0].toLowerCase();
    var first = first.split("")    // first word of title string will 
    console.log("This is your first word" + first);
    first[0] = first[0].toUpperCase();      // always be capitalized 
    title_array[0] = first.join("");
    console.log("First word - " + title_array[0] + " - is capitalized!")
    // console.log(title_array)

    for (var i = 1; i < title_array.length; i++) {
        console.log("Loop tracker: title_array[i] = " + title_array[i])
        title_array[i] = title_array[i].toLowerCase();
        if (!(minor_array.includes(title_array[i]))) {
            var word = title_array[i].split("")
            word[0] = word[0].toUpperCase()
            console.log(word[0])
            title_array[i] = word.join("");
        }
    }
console.log("Final title: " + title_array.join(" "));
return title_array.join(" ");  
}

var test_minorWords = 'a an the of';
var test_title = 'aBC deF Ghi';
titleCase(test_title, test_minorWords);
// Add a "prototype" to a function/class
// "prototype" being a single, memory location for functions/attributes
//             that all objects/instances can access


function Human(name,age) {
    this.name = name;
    this.age = age;
}

Human.prototype.speaks = function() {
    console.log (this.name);
}

var Carter = new Human('Carter',12);

Carter.speaks();


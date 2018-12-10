function Stack(){                                           // GENERATES STACK OBJECT CONTAINING "CONTENTS" ARRAY
    this.contents = [];
}

Stack.prototype.add = function(val){                        // STORES ADD FUNCTION AS PROTOTYPE, ALLOWING OBJECT TO CALL ON IT WHEN NEEDED 
    this.contents.push(val);
    console.log (this.contents);
}

Stack.prototype.remove = function() {                       // STORES REMOVE FUNCTION AS PROTOTYPE, ALLOWING OBJECT TO CALL ON IT WHEN NEEDED
    return this.contents.pop();
}

my_stack = new Stack();
my_stack.add(10);
my_stack.remove();
console.log (my_stack.contents)


/* PROTOTYPE:

A class is responsible for instantiating "objects."

Each of these objects will have the attributes passed by it's parent class.

PROTOTYPE is an object inherently contained in each instantiated objects. 

It's purpose is simple: store functions and attributes OUTSIDE of parent class 

                                    that can be passed INSIDE of instantiated objects

*/




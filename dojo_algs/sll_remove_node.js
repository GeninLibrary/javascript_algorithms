// Build an Sll Constructor 
/// A Node Constructor
// And a prototype function that removes Sll first node


// Sll CONSTRUCTOR
function Sll() {
    this.head = null;
};


// NODE CONSTRUCTOR
function Node(val) {
    this.val = val;
    this.next = null;
};


// Sll.PROTOTYPE THAT ADDS NODES TO LINKED LIST
Sll.prototype.add = function(val) {
    var new_Node = new Node(val);
    if(this.head == null) {
        this.head = new_Node;
    } 
    else {
        var cur = this.head;
        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = new_Node;
    }
}


// CREATE LINKED LIST WITH 3 NODES
var mySll = new Sll();
mySll.add(1);
mySll.add(2);
mySll.add(3);
console.log(mySll);
console.log(mySll.head.next.next);                  // to access individual value, you have to go inside 
                                                    // the OBJECT





// Sll.PROTOTYPE THAT REMOVES FIRST NODE FROM LINKED LIST
Sll.prototype.remove_first = function() {
    if (this.head == null) {
        return null;
    }
    temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp;
}





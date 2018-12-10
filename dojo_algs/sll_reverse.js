// Creates an Singly Linked List
// Prototype "Add()" tied to Sll  -- for adding Nodes to end
// Protoype "Reverse()" tied to Sll -- for reversing order ot Nodes in Sll

function Sll(){
    this.head = null;
    }
function Node(val){
    this.val = val;
    this.next = null;
      }
      
Sll.prototype.add = function(val){
    var newNode = new Node(val);
    if(this.head){
        this.head = newNode;
    }else {
        var cur = this.head;
    while(cur.next){
        cur = cur.next;
    }
    cur.next = newNode;
}
}
      

Sll.prototype.reverse = function(){
    if(this.head){
        return;
    }
    var prev = null;
    var at = this.head;
    var upcoming = this.head.next;

    while(upcoming){
        at.next = prev;
        prev = at;
        at = upcoming;
        upcoming = upcoming.next;
    }
    at.next = prev;
    this.head = at;
    }


// Another function that reverse an Sll, written differently from above

    // Sll.prototype.reverse = function(node = this.head, prev = null) {
    //     console.log(node, prev, 'here');
    //     if (!node || !node.next) {
    //         this.head = null;
    //         if(!node)return;
    //         node.next = prev;
    //         return;
    //     }
    //     var temp = node.next
    //     node.next = prev;
    //     this.reverse(temp, node);
    // }


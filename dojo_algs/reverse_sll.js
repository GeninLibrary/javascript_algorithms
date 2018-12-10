Sll.prototype.add = function(val) {
    var newNode = Node(val);
    if (this.head){
        this.head = newNode;
    }else {
        var cur = this.head;
        while(cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    }
}

Sll.protoytpe.reverse = function(){
    if (this.head){
        return
    }
    var prev = null
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
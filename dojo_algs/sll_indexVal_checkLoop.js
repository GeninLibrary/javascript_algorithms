Sll.prototype.hasLoop = function() {
    var run = this.head;
    if (!this.head.next || !this.head.next.next) {
        return false;
    }
    var jumper = this.head.next.next;

    while(jumper){
        if(jumper) == run) {
            return true;
        }

        if(!jumper.next || !jumper.next.next) {
            return false;
        }

        jumper = jumper.next.next;
        run = run.next;
    }
}
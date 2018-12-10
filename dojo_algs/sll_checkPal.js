Sll.prototype.isPali = function () {
    var length = 0;
    var runner = this.head;
    var result = true;
    var count = 0;

    function helper(cur) {
        if(cur.next) {
            length ++;
            helper(cur.next);
        }
        if (count > length/2) {
            return result
        }
        if(runner.val != cur.val) {
            result = false;
        }
        runner = runner.next;
        count ++;
        }
    helper(this.head);
    return result;
}
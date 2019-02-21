function genFib() {
    var holder = [];
    var sum = 0;
    var counter = 0;

    while(sum < 100) {
        if(sum == 0) {
            holder.push(sum);
            sum++;
            counter++;
        }
        else {
            holder.push(sum);
            sum = sum + holder[counter-1];
            counter++;
        }
    }
    console.log(counter);
    console.log(holder);
    return holder;
}

genFib();
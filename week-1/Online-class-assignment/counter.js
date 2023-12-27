/*
    Create a counter in Javascript (counts down from 30 to 0)
*/
let count = 30;
let counter = setInterval(function() {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(counter);
        console.log('Done');
    }
}
, 1000);

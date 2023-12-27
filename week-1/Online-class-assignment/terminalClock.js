/* 
    Create a terminal clock (HH:MM:SS) in Javascript.
*/
const currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
setInterval(function() {
    console.log(`${hours}:${minutes}:${seconds}`);
    seconds++;
    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes > 59) {
        minutes = 0;
        hours++;
    }
    if (hours > 23) {
        hours = 0;
    }
}
, 1000);
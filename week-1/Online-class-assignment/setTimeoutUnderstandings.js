/*
   Calculate the time it takes between a setTimeout call and the inner function actually running. 
*/
const currentTime = new Date();
setTimeout(function() {
    const newTime = new Date();
    console.log(`It took ${newTime - currentTime} milliseconds for setTimeout to run.`);
} 
, 1000);

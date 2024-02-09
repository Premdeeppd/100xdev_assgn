function sleep(milliseconds) {
    const targetTime = Date.now() + milliseconds;
    while (Date.now() < targetTime) {
        // do nothing
    }
    return new Promise(function(resolve){
        resolve('hi there!');
    }) 
}

function onDone(x){
    console.log(x);
}
sleep(3000).then(onDone);
console.log('Hello');

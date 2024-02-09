function countDown(number) {
    console.log(number);
    
    if (number > 0) {
        setTimeout(function() {
            countDown(number - 1);
        }, 1000);
    }
}

countDown(30);

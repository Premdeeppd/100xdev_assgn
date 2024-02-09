const counterId = setInterval(function(){
    const date = new Date();
    const hr = String(date.getHours()).padStart(2,'0');
    const mn = String(date.getMinutes()).padStart(2,'0');
    const sc = String(date.getSeconds()).padStart(2,'0');
    console.clear();
    console.log(`${hr}:${mn}:${sc}`);
},1000);
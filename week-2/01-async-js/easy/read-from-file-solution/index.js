const fs = require('fs');

function premReadFile(func){
    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        func(data);
    });
    for(let i = 0;i<10000000000;i++){

    }
};
function onDone(x){
    console.log(x);
}
premReadFile(onDone);

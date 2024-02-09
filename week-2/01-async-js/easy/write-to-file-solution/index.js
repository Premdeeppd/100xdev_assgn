const fs = require('fs');

let data = "This is the data written to a.txt file using fs module"

function premWriteFile(x){
    fs.writeFile('a.txt',x,err=>{
        if(err){
            console.log(err);
        }
    })
}
premWriteFile(data);
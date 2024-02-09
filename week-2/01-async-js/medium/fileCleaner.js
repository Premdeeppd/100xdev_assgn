const fs = require('fs');

fs.readFile('a.txt', 'utf8', (err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        let content = data;
        let temp = data.replace(/\s+/g, ' ').trim();
        fs.writeFile('a.txt',temp,err=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('File cleaned successfully');
            }
        })

    }
})
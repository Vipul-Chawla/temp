const {readFile, writeFile} = require('fs');

readFile('./contents/first.txt', "utf8", (err, result) =>{
    if(err){
        console.log(err);
        return;
    }

    const firstContent = result;

    readFile('./contents/second.txt', "utf8", (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const secondContent = result;

        
        writeFile('./contents/resultOfAsyncFS', `Result after merging the content of first.txt and second.text : \n${firstContent} \n${secondContent}`, (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("affa", result);
        })
    })

})
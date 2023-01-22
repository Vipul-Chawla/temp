const {readFileSync, writeFileSync} = require('fs');

const firstcontent = readFileSync('./contents/first.txt', "utf8");
const secondcontent = readFileSync('./contents/second.txt', "utf8");

// console.log(firstcontent, secondcontent);

writeFileSync('./contents/resultOfSyncFS', `Result after merging the content of first.txt and second.text : \n${firstcontent} \n${secondcontent}`);

//if want to append content
writeFileSync('./contents/resultOfSyncFS', `appended content`, {flag : 'a'});



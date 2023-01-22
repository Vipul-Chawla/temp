// PATH Module

const path = require("path");
console.log(__dirname);
console.log(path.basename(__dirname));

const filePath = path.join("abc", "efg", "hij");
const absolutePath = path.resolve("abc", "efg", "hij");

console.log(filePath);
console.log(absolutePath);
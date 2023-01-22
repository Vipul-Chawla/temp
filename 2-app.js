// Globals : NO Modules

// __dirname - path to the current directory
// __filename - file name
// process - info about the env
// require - to get any module
// module - info about current module

console.log(__dirname)
console.log(__filename)

setInterval(()=>{
    console.log("hello i'm back!!");
}, 1000);

setTimeout(()=>{
    console.log("hello i'm backback!!");
}, 1000);
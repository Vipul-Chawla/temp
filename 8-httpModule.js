const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.write("this is my home page");
    }if(req.url == '/about'){
        res.write("about page");
    }if(req.url == '/a'){
        res.write(`<h1>Oops!</h1>`)
    }

    res.end();
})

server.listen(5000);
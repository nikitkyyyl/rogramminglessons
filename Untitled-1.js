const http = require('http');

const hostname = '192.168.1.149';
const port = 3000;

const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Tupe', 'text/plain');
     res.end('Hello Worl\n');
});

server.listen(port, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
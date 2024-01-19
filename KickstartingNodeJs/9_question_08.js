// stream 

// streams:- stream is a sequence of data that is move from one point to another.
// stream of data transfer one file to another within the same computer

// Process- stream of data in chunks(small amount) as they arrive instead of 
// waiting for the entire data to be available before processing

// Buffers

// Buffers:- waiting for data to excute the process or extra data which is 
// watting for excuite post data and their turn on so the data is in que that data is called buffer.

// ex:- 100 people come to join the roler coster but roler coster has 30 seat so 30 people sit on roler coster and remaining 70 is in que that is buffer 
// similary only 10 people come but coster has 30 seat so that 10 people waiting for 20 people to fill the seat than coster start. that 10 people is waiting so that people is also buffer.


const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {

        fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                log(err)
            }
            console.log(`data from file` + data);
            res.setHeader("Content-Type", "text/html");
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body>${data}</body>`) 
            res.write(
                '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
            );
            res.write('</html>');
            return res.end();
        });
    } 
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsebody>>>", parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log(`inside fs.wtitefile`);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
        }; 
    });

server.listen(3000);

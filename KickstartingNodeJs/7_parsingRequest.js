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


const { fstat } = require("fs");
const http = require("http");
const fs = require("fs"); //fs allow us to work with file system

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data",(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            // console.log(parseBody)
            const message = parseBody.split("=")[1];
            fs.writeFileSync("message.text", message);
        });


        // fs.writeFileSync("message.txt","text/hrml");
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>"); 
    res.write("<head><title>Web Page</title></head>");
    res.write("<body><h1>Welcome to our Web Page</h1></body>");
    res.write("</html>");
    res.end();
    
});

server.listen(3000);

// check its working or note => inspect => network => fill blank and send then appear message on application tab in middle 

// it also shor buffer and msg in terminal

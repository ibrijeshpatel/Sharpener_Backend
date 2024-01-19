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
        fs.writeFileSync("message.txt","text/hrml");
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
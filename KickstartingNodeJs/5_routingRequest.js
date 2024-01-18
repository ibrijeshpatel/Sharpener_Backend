// stage 1

/*
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader("Content-Type", "text/html");
    
    res.write("<html>");
    
    res.write("<head>"); // title and style 
    res.write("<title>Web Page</title>");
    res.write("</head>"); 

    res.write("<body>"); // all code
    res.write("<h1>Welcome to our Web Page</h1>");

    res.write("</body>");
    res.write("</html>");
    
})

server.listen(3000);

*/

// stage 2

const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    
    res.write("<html>");
    
    res.write("<head>"); 
    res.write("<title>Web Page</title>");
    res.write("</head>"); 

    res.write("<body>"); 
    res.write("<h1>Welcome to our Web Page</h1>");
    res.write("</body>");

    res.write("</html>");
    res.end();
    
});

server.listen(3000);
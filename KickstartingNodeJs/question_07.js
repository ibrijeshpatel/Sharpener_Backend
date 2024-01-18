// 1. Explain the nodejs event driven architecture.
// Node. js is an asynchronous, event-driven platform built on Chrome's V8 
// JavaScript engine. It is particularly well-suited for building scalable network 
// applications due to its non-blocking I/O model. At the heart of Node. js is the 
// event loop, which handles events and executes callbacks associated with them.

// 2. How can it basically scale to handle 1000 of requests a sec. 
// What helps node JS even though it is single threaded?
// The event-driven model is very efficient and allows NodeJS to handle 
// thousands of concurrent requests with ease. Whenever a client sends a 
// request the single thread will send that request to someone else. The 
// current thread will not be busy working with that request. There are 
// workers working for the server.

// 3. What does process.exit do?
// exit() function to forcefully terminate it. You need to do this 
// manually by canceling the process in the terminal. 
// The process. exit() is one of the commonly used and quick 
// ways to terminate the process even if the asynchronous calls are still running

// 4. What does req.url , req.header and req.method contain?
// req.url is a string containing currently requested url path 
// req.header an object containing the predefined/custom header given in the current request
// req.method containing a string corresponding to HTTP methods of the reqyuest
/*

const http = require('http');

const server2 = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); 
    // process.exit(); // to reset the code
    res.setHeader('Content-Type','text/html')  // Response Object
    
    res.write('<html>'); // inside html all code write
    
    res.write('<head>') // inside head #title #style write
    
    res.write('<title>My First Page</title>')

    res.write('<style>')
    res.write('button {margin-right: 10px;}')

    res.write('</style>')
    res.write('</head>')
    
    res.write('<body>') // inside body all code write except head part
    res.write('<h1>Welcome to My Node JS Server </h1>') // inside body all code write except head part
    
    res.write('<button>Home</button>')
    res.write('<button>About</button>')
    res.write('<button>Node</button>')
    
    res.write('</body>')
    res.write('</html>');
    res.end();
});  

server2.listen(3000); 

*/

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const getUrl = url.parse(req.url, true);


    if (getUrl.pathname == "/") {

        // Home Page
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
        res.write("<html>");

        res.write("<head>");
        res.write("<title>Home Page</title>");

        res.write("<style>");
        res.write("a {margin-right: 10px; color: black; text-decoration: none; }");
        res.write("a.active { font-weight: bold; color: red; }");
        res.write("</style>");

        res.write("</head>");

        res.write("<body>");
        res.write("<h1>Welcome to My Node JS Project</h1>");
        res.write("<div>");
        res.write(`<a href='/' class='${getUrl.pathname === "/" ? "active" : "" }' >Home</a>`);
        res.write(`<a href='/about' class='${getUrl.pathname === "/about" ? "active" : "" }' >About</a>`);
        res.write(`<a href='/node' class='${getUrl.pathname === "/node" ? "active" : "" }'>Node</a>`);
        res.write("</div>");
        res.write("<p>हतो वा प्राप्यसि स्वर्गम्, जित्वा वा भोक्ष्यसे महिम्।</p>");
        res.write("<p>तस्मात् उत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चय:॥</p>");
        res.write("</body>");

        res.write("</html>");
        res.end();

    } else if (getUrl.pathname == "/about") {

        // About Page
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
        res.write("<html>");

        res.write("<head>");
        res.write("<title>About Page</title>");

        res.write("<style>");
        res.write("a {margin-right: 10px; color: black; text-decoration: none; }");
        res.write("a.active { font-weight: bold; color: red; }");
        res.write("</style>");

        res.write("</head>");

        res.write("<body>");
        res.write("<h1>Welcome to About Us </h1>");
        res.write("<div>");
        res.write(`<a href='/' class='${getUrl.pathname === "/" ? "active" : "" }' >Home</a>`);
        res.write(`<a href='/about' class='${getUrl.pathname === "/about" ? "active" : "" }' >About</a>`);
        res.write(`<a href='/node' class='${getUrl.pathname === "/node" ? "active" : "" }'>Node</a>`);
        res.write("</div>");
        res.write("<p>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।</p>");
        res.write("<p>मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥</p>");
        res.write("</body>");

        res.write("</html>");
        res.end();

    } else if (getUrl.pathname == "/node") {
        
        // Node Page
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
        res.write("<html>");

        res.write("<head>");
        res.write("<title>Node Page</title>");

        res.write("<style>");
        res.write("a {margin-right: 10px; color: black; text-decoration: none; }");
        res.write("a.active { font-weight: bold; color: red; }");
        res.write("</style>");
        res.write("</head>");

        res.write("<body>");
        res.write("<h1>Welcome to My Node Js projects </h1>");
        res.write("<div>");
        res.write(`<a href='/' class='${getUrl.pathname === "/" ? "active" : "" }' >Home</a>`);
        res.write(`<a href='/about' class='${getUrl.pathname === "/about" ? "active" : "" }' >About</a>`);
        res.write(`<a href='/node' class='${getUrl.pathname === "/node" ? "active" : "" }'>Node</a>`);
        res.write("</div>");
        res.write("<p>यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:।</p>");
        res.write("<p>अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥</p>");
        res.write("</body>");

        res.write("</html>");
        res.end();
    }

});

server.listen(3000); 

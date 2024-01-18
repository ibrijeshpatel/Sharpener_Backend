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

        res.write("<Style>");
        res.write("a {margin-right: 10px;}");
        res.write("</Style>");

        res.write("</head>");

        res.write("<body>");
        res.write("<h1>Welcome to My Node JS Project</h1>");
        res.write("<div>");
        res.write("<a href='/about'>About</a>");
        res.write("<a href='/node'>Node</a>");
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

        res.write("<Style>");
        res.write("a {margin-right: 10px;}");
        res.write("</Style>");

        res.write("</head>");

        res.write("<body>");
        res.write("<h1>Welcome to About Us </h1>");
        res.write("<div>");
        res.write("<a href='/'>Home</a>");
        res.write("<a href='/node'>Node</a>");
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

        res.write("<Style>");
        res.write("a {margin-right: 10px;}");
        res.write("</Style>");

        res.write("</head>");

        res.write("<body>");
        res.write("<h1>Welcome to My Node Js projects </h1>");
        res.write("<div>");
        res.write("<a href='/'>Home</a>");
        res.write("<a href='/about'>About</a>");
        res.write("</div>");
        res.write("<p>यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:।</p>");
        res.write("<p>अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥</p>");
        res.write("</body>");

        res.write("</html>");
        res.end();
    }

});

server.listen(3000); 

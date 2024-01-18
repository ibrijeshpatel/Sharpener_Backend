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
    
});  

server2.listen(3000); 
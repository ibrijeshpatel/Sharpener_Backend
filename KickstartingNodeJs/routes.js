// Did you understand event loop ? 
// Please explain it in your words if you did.


// Event loop is a single threaded non blocking I/O loop it is responsible for 
// excuting asynchronous connected. it make Node.js efficient and responsive to 
// allows multiple task to be handle in same time without blocking the main threadId.

// The event loop works by constantly monitoring a queue of events. When an event occurs, 
// the event loop will call the appropriate callback function. Callback functions are functions 
// that are passed to other functions as arguments and are executed when the other function is finished.

// It handle 6 event

// 1. Timers are events that are triggered after a certain amount of time has elapsed.

// 2. I/O events are events that are triggered when an I/O operation, such as reading a file or writing to a socket, is completed.

// 3. SetImmediate events are events that are triggered at the end of the current event loop cycle.

// 4. Process.nextTick events are events that are triggered before the next event loop cycle begins.

// 5. Close events are events that are triggered when a socket or other resource is closed.

// 6. Error events are events that are triggered when an error occurs.


const { connected } = require('process')

const fs = require('fs');
const { threadId } = require('worker_threads')


const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text" 
// };

// All are same

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";


exports.handler = requestHandler;
exports.someText = "Some hard coded text";
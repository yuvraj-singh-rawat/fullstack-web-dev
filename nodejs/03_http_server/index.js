const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header
        res.end("Home Page"); // Response Body
    } else if (req.url === "/about") {
        res.end("About Page");
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});


// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
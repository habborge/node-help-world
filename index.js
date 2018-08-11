const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('POWER OF THE PEOPLE\n');
});

server.listen(port, () => {
  console.log(`Server running on ${port}/`);
});

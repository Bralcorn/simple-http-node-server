// Create a Github repo called simple-http-node-server. Create an 
// HTTP server on port 3000 with a request handler that creates a 
// file named hello-world.txt. You will be using the fs module to 
// do this. Write the content: "Hello to this great world" to the 
// hello-world.txt file. Please submit your finished code in your 
// submission.


const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
  try {
    fs.appendFileSync('hello-world.txt', 'Hello to this great world');
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }
  console.log(`server is listening on ${port}`);
});



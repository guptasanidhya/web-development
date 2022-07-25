console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World This is sanidhya gupta');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>padding margin and model</title>
      <style>
         *{
             box-sizing:border-box;
             margin: 0px;
             padding: 0px;
         }
          body{
              background-color: rosybrown;
          }
  #first{
      background-color: silver;
      border: 3px ridge black;
      padding: 30px 15px;
      margin: 50px;
  border-radius: 23px;
  width: 533px;
  font-family:cursive;
  font-size:33px;
  line-height:1.3em;
  font-style:italic;
  }
   #second{
      background-color: silver;
      border: 3px ridge black;
      padding: 30px 15px;
      margin: 50px; 
  border-radius: 23px;
  width: 533px;
  font-family:cursive;
  font-size:33px;
  line-height:1.3em;
  font-style:italic;
  }
      </style>
  </head>
  <body>
      <div class="container">
          <p id="first">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae autem molestiae quibusdam atque velit repellat quia qui sequi voluptatum commodi totam vel beatae cupiditate ducimus voluptatibus natus praesentium laboriosam perferendis, error maxime porro. Quisquam!</p>
      </div>
      <div class="container">
          <p id="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat ea iure corrupti voluptas sequi odit. Dolore laudantium odio dolorum nam? Deleniti harum repudiandae iusto sunt praesentium, ipsum eos rem!</p>
      </div> 
  </body>
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
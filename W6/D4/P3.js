// Inspecting request details in an HTTP server

const http = require("http");

const server = http.createServer(function(req,res){
    // writeHead() sets the reponse status code and headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    // end() sends the response body and closes the 
    // req,method tells the HTTP method, such as GET & POST
    res.end("Method: "+req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){
    console.log("server is running at http://localhost:3001");
});
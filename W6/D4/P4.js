// Handling different GET routes

const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home Page / Dashboard");
        return;
    }
    if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("About Route. Welcome to About Us Page.");
        return;
    }
    if(req.method === "GET" && req.url === "/products"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Products Route. Welcome to Products Us Page.");
        return;
    }
    if(req.method === "GET" && req.url === "/user"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Returning all users.");
        return;
    }
    // POST = create
    // curl -X POST http://localhost:3001/user
    // curl: client URL: free,open src cli tool used to transfer data to or from a server using various network protocol.
    if(req.method === "POST" && req.url === "/user"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("New User created.");
        return;
    }
    // Unknow route failback
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Route not found.");
});

server.listen(3001,function(){
    console.log("server is running at http://localhost:3001");
});
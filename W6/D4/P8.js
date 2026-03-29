// Parsing JSON request bodies
const http = require("http");

const server = http.createServer(function (req, res) {
    if(req.method === "POST" && req.url === "/api/users"){
        let body = "";

        req.on("data", function (chunk) {
            body += chunk.toString();
        });

        req.on("end", function () {
            try{
                const parsed = JSON.parse(body);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    success:true,
                    received:parsed
                }));
            }
            catch(error){
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({success:false,messgae:"Invalid JSOn body"}));
            }
        });
        return;
    }
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({success:false,messgae:"Route not found."}));
});

server.listen(3001,function(){
    console.log("server is running at http://localhost:3001");
});
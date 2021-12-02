var express = require("express");
var apiServer = express();

var port = 3000;
var host = 'localhost';
apiServer.listen(port, host, ()=>{
    console.log('server running at http://%s:%d',  host, port);
});

var sauce = "/";
apiServer.get(sauce, (request, response)=>{
    response.send('<h1>ciao</h1>');
});

apiServer.get("/nome", (request, response)=>{
    response.send('<h1>Sesana</h1>');
});
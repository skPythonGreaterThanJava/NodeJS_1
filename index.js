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

apiServer.get("/mioNome", (request, response)=>{
    response.send('Ciao, il tuo nome è: ' + request.query.nome);
});

apiServer.get("/somma", (request, response)=>{
    var a = parseInt(request.query.a);
    var b = parseInt(request.query.b);
    response.send('La somma è: ' + (a + b));
});
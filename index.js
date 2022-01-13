var express = require("express");
var apiServer = express();
var fs = require("fs");

var port = 3000;
var host = 'localhost';
apiServer.listen(port, host, ()=>{
    console.log('server running at http://%s:%d',  host, port);
});

var sauce = "/";
apiServer.get(sauce, (request, response)=>{
    response.send('<h1>ciao</h1>');
});

apiServer.post("/nome", (request, response)=>{
    response.setHeader("Content-Type", "application/json");
    response.json(JSON.stringify({"nome": "gianni"}));
});

apiServer.get("/mioNome", (request, response)=>{
    response.send('Ciao, il tuo nome è: ' + request.query.nome);
});

apiServer.get("/somma", (request, response)=>{
    var a = parseInt(request.query.a);
    var b = parseInt(request.query.b);
    response.setHeader("Content-Type", "application/json");
    response.send(JSON.stringify({'somma': (a + b)}));
});

apiServer.get("/student", (request, response)=>{
    console.log("student id: " + request.query.id);
    fs.readFile("studenti.json", (err, data)=>{
        if(err) console.log(err);
        else {
            var students = JSON.parse(data);
            students.forEach(element => {
                if (element.id == request.query.id) {
                    console.log(element);
                    response.send(element.id);
                    //students.find(x => x.id === request.query.id)       <----Figo!!!
                }
            });
        } 
    })
});

apiServer.get("/newStudent", (request, response)=>{
    var other = {"id" : request.query.id, "name" : request.query.name, "surname" : request.query.surname};
    fs.readFile("studenti.json", (err, data) => {
        if(err) console.log(err);
        else {
            var students = JSON.parse(data);
            students.push(other);
            fs.writeFile("studenti.json", JSON.stringify(students), (err)=>{
                if(err) console.log(err);
            });
        }
    });
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Setup Application
const port = 3000;

app.use(bodyParser.json());
app.listen(port);
 
// Setup Storage
let domains = [];

//POST /domains
app.post('/domains', function(req, res) {
    if(!req.body) {    
        console.log(`Error: ${JSON.stringify(req.error)}`);
        res.sendStatus(400);
    }
    
    domains.push(req.body);
    res.send(`Successfully added ${req.body.name}`);
});

//GET all domains
app.get('/domains', function(req, res){
    res.send(domains);
});

//GET /domains/:domain_name
app.get('/domain/:domain_name', function(req, res){
    let domain_name = req.params.domain_name;
    let response;

    for(let i = 0; i < domains.length; i++) {
        console.log(`Testing domain ${domains[i].name}`);
        if(domains[i].name == domain_name) {
            response = domains[i];
            break;
        }
    }

    if(!response) {
        res.sendStatus(400);
    } else {
        res.send(response);
    }
});

console.log(`Application started at localhost:${port}`);
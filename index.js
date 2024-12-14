var http = require('http');
var url = require('url');
var express = require('express');
const PORT = 8080;

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Welcome to my API");
})

app.listen(PORT,)


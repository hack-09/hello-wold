// var http = require('http');
// var url = require('url');
var express = require('express');
const PORT = 8080;

const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" }
];

app.get('/', (req, res)=>{
    res.send("Welcome to my API");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
} )


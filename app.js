const express = require('express');
const app = express();

const { listBooks } = require('./model/index');

const port = 8081;

app.use(express.json());

app.get('/api/bookslist', (req, res) => {
    res.send(listBooks());
});


app.get('/api/bookslist/:id', function(req, res){
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
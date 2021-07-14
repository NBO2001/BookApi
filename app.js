const express = require('express');
const app = express();

const { listBooks, searchId } = require('./model/index');

const port = 8081;

app.use(express.json());

app.get('/api/bookslist', async (req, res) => {
    res.send(listBooks());
});


app.get('/api/bookslist/:id', async function(req, res){
    await res.send(searchId(req.params.id));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
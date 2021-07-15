const express = require('express');
const app = express();


const port = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    return res.send("Connected!").status(200);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/api/bookslist`);
});
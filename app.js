require('dotenv').config()
const express = require('express');
const app = express();

require('dotenv').config();
const { listBooks, searchId, suggestionDay } = require('./model/index');

const port = (process.env.PORT);

app.use(express.json());

app.get('/', async (req, res) => {
    return res.send("Connected!").status(200);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/api/en/bookslist`);
});
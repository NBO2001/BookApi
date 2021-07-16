require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { listBooks, searchId, suggestionDay } = require('./model/index');

const port = (process.env.PORT);

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async (req, res) => {
    return res.send("Connected!").status(200);
});

app.get('/api/:lang/bookslist', async (req, res) => {
    const data = await listBooks(req.params.lang);
    
    if(data){
        return res.send(data).status(200);
    }else{
        return res.status(400).json({
            erro: true
        });
    }
});

app.get('/api/:lang/suggestion', async (req, res) => {

    const data = await suggestionDay(req.params.lang);

    if(data){

        return res.send(data).status(200);

    }else{
        return res.status(400).json({
            erro: true
        })
    }

});

app.get('/api/:lang/bookslist/:id', async function(req, res, next){
    const data = await searchId(req.params.lang,req.params.id);
    if(data){
        res.send(data).status(200);
    }else{
        return res.status(400).json({
            erro: true
        })
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/api/en/bookslist`);
});
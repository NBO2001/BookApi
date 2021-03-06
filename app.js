const express = require('express');
const app = express();

const { listBooks, searchId, suggestionDay } = require('./model/index');

const port = 8081;

app.use(express.json());

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
    console.log(`App listening at http://localhost:${port}/api/bookslist`);
});
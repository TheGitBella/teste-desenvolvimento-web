console.log ("Hello World!!!");

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.json(pokedex);
});

app.listen(8080, () => {
    let data = new Date();
    console.log('API started 8080: ' + data);
});

console.log ("Hello World!!!");

/* import addCard from './function.js'; */
import { pokedex } from './pokedex';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

/* let pokedex = require('./pokedex'); */

app.get('/', (req, res) => {
    res.json(pokedex);
});

app.listen(8080, () => {
    let data = new Date();
    console.log('API started 8080: ' + data);
});
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello')
})


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

};

const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(` listening to port ${PORT} `);
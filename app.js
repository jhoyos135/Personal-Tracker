const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./Models/User');
require('./Models/Customer');
require('./Services/passport');

mongoose.connect(keys.MongoURI, {useNewUrlParser: true})

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 2,
    keys: [keys.cookieKey]
})
);

app.use(passport.initialize());
app.use(passport.session());

require('./Routes/authRoutes')(app);
require('./Routes/customerRoutes')(app);


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
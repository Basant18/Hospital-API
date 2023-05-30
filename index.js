const express = require('express');
const env = require('./config/environment');
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const app = express();

app.use(express.urlencoded({extended: true}));

// use express router
app.use('/', require('./routes'));

app.listen(env.PORT, (err) => {
    if(err)
    {
        console.log("Error in firing the server ",err);
        return;
    }
    console.log("Server is running on port ", env.PORT);
});
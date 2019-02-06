var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const db = mongoose.connection;
//Если запустили локальную базу, то можно использовать такой вариант
// mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.DB_NAME}?authSource=admin&w=1`);
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.all("/api/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});
app.use('/api/users', require('./routes/users'));


db.on('error', (err) => {
    console.log('DB Error ', err);
});

db.once('open', () => {
    app.listen(1377, () => {
        console.log('Example app listening on port ', 1377);
    });
});

module.exports = app;

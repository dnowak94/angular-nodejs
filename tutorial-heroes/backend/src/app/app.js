var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:4200'
};
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/heroes', require('./routes/heroes'));

module.exports = app;

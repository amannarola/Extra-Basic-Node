var express = require('express');
var path = require('path');
require("dotenv").config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//var indexRouter = require('./routes/formidable');
const logger = require('./winston_logger');

//app.use('/', indexRouter);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port,()=>{
    logger.error(`Server up and running port :${port}`);
});

module.exports = app;
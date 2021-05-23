// cargar variables de entorno en nuestra app, acceso to DB
require("dotenv").config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// cargamos nuestras rutas de acceso a la app
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

// cargar nuestra app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// llamamos a las rutas de acceso a la app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


module.exports = app;

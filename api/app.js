var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
// var mongodb = require('mongodb');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginbackRouter = require('./routes/loginback');
var barcosbackRouter = require('./routes/posicionesbarcosback');
var iniciojuegoRouter = require('./routes/iniciojuegoback');
var juegoRouter = require('./routes/juegoback');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// let MongoClient = mongodb.MongoClient;

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/loginback', loginbackRouter);
app.use('/posicionesbarcosback', barcosbackRouter)
app.use('/iniciojuegoback', iniciojuegoRouter)
app.use('/juegoback', juegoRouter)




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//Inicializamos socketio





var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://kepa5273:Bootcamp123@cluster0.gx1fh.mongodb.net/HundirLaFlota?retryWrites=true&w=majority";
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  app.locals.db = client.db("HundirLaFlota");
  // perform actions on the collection object
  //client.close();
});


module.exports = app;

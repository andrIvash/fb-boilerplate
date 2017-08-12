const express = require('express');
const http = require('http');
const path = require('path');
const config = require('./config/');
const routes = require('./routes');
const app = express();

// view engine setup
//app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'pug');

// подключение routes
routes(app);

// --------------------  обработка ошибки  ------------------//

// catch 404 
app.use((req, res) => {
    const err = new Error(400, 'wrong query');
    res.send(err);
});


// -------------------------запуск сервера ----------------------------//

http.createServer(app).listen(config().get('port'), function() {
    console.log('express server listening on port : ' + config().get('port'));
});
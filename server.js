// Note! .env is in .gitignore
require('dotenv').config();

const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session')
const bodyParser = require('body-parser');
const app = express();

// Config
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true }));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

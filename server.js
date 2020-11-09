const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

require('./db/db');

app.use(session({
  secret: 'hi charter',
  resave: false,
  saveUninitialized: false,
}));

//-----MIDDLEWARE---------
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus:200
}

app.use(cors(corsOptions));

const restaurantController = require('./controllers/restaurantController');

app.use('/api/v1/restaurant', restaurantController);


app.listen(9000, () => {
  console.log('I am working, Charter!')
})

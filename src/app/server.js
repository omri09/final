const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const studRoute = require('./routes');
app.use(cors());
app.use(bodyParser.json());
app.use('', studRoute);

///////////////////////////////
let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Listening to port');
});

// Connection string to MongoDB
mongoose.connect('mongodb://localhost:27017/MyStudCrud').then(
    () => {console.log('DB is connected!');},
    err => {console.log('Can not connect to DB' + err);}
);




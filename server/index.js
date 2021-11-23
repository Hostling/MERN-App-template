const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');

const mainRouter = require('./routes/api/main');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/api', mainRouter);

const connectionString = 'mongodb://mongodb:27017/crm';

mongoose
    .connect(connectionString, { useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message)
    });


app.listen(5000);

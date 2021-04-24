const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const MONGODB_URL = 'mongodb://localhost/Users-MongoDB-data';

const app = express();
app.use(cors());

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...');
})

app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(8000, () => {
    console.log('Server started...');
})


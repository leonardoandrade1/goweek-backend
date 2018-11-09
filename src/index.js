const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    "mongodb://root:root123@ds155243.mlab.com:55243/goweek-leonardo",
    {
        useNewUrlParser: true,
        autoReconnect: true
    });

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(8000, () => {
    console.log('Server started on port 8000 :p');
});
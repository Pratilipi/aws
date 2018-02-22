'use strict';

const express = require('express');
const morgan = require('morgan');

// Constants
const PORT = 8080;

// App
const app = express();

app.use(morgan('short'));

app.get('/health', function (req, res){
	res.send('OK');
});

app.get('/hello-node/one', function (req, res) {
  res.send('Hello world');
});

app.get('/hello-node/send', function (req, res) {
  res.send('Hello world');
});

app.get('/hello-node/end', function (req, res) {
  res.end('Hello world');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

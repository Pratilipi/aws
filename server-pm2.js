'use strict';

const express = require('express');
const responseTime = require('response-time')
//const axios = require('axios');

// Constants
const PORT = 8080;

// App
const app = express();

app.get('/health', function (req, res){
	res.send('OK');
});

app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

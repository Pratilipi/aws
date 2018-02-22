var express = require('express')
var addRequestId = require('express-request-id')();
var logger = require('./lib/logger');


var app = express();

app.use(addRequestId);

var testController = require('./TestController');
var testService    = require('./TestService'); 

/*
app.get('/health', function (req, res){
	console.log('health');
        res.send('OK');
});

app.get('/hello-node/one', function (req, res) {
  res.send('Hello world');
});
*/

app.use(logger.logger('Hello-Node'));

app.use('/', function (req,resp,next) {
	const start = process.hrtime();
	req.params.start = start;
	//console.log(req.id, 'start', start);
	logger.info(req.id+', Start: '+start);
	next();
});


app.get('/health', function (req, res){
        const end = process.hrtime(req.params.start);
        //res.status(200).send("OK");
        logger.info(req.id+', End: '+end);
	res.status(200).send("OK");
});


app.use('/hello-node',new testController(new testService()).router);

/*
app.get('/', function (req, res) {
  res.send('Hello World')
})
*/
 
app.listen(8080);

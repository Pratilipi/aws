var express = require('express');
var router = express.Router();
var logger = require('./lib/logger');
//var Service = require('./TestService');
//var logger;
var service;

router.get('/:id',  async function  (req, res) {
	const start = req.params.start;
	logger.info('test')
	var name = await service.get(req.params.id);
	const end = process.hrtime(start);

	logger.info(req.id+', End: '+end);

	res.status(200).send({"name":name});
	//console.log(req.id, 'end', end, req.headers['request-id']);
	//logger.info(req.id+', End: '+end);
});

function Test (serviceInst) {
	console.log("Initializing controller");
	//service = new Service();
	service = serviceInst;
	
}

Test.prototype.router = router; 

module.exports = Test; 

var neo4jDriver = require('./neo4jUtil');


var session;
Test.prototype.get = async function (_id) {
	//var name = await session.run('MATCH (p:Person {id : '+_id+' }) RETURN p', {id: _id})		
	var name = await session.run('MATCH(p1:Pratilipi{language:"HINDI"}) where p1.pratilipi_id in [6379172566925312,5768914774523904,5692095325011968] WITH collect (p1) as excluded MATCH(p2:Pratilipi{language:"HINDI"}) WHERE not p2 in excluded WITH p2 order by p2.read_count desc skip 5 limit 5 RETURN p2.pratilipi_id')
	.then(function (result) {
	//	console.log(result);
    	//	result.records.forEach(function (record) {
      	//		return record;
    	//	});
	//	console.log(result);
		return result.records;
    		session.close();
  	})
  	.catch(function (error) {
    		console.log(error);
		return null;
 	});
	return name;
}

function Test() {
        console.log("Initializing...")
	session = neo4jDriver.session();
}


module.exports = Test;

var connection = require('./connection.js');
var pgp = require('pg-promise');

var db = pgp(connection);

db.query('SELECT NOW() AS "theTime"')
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log(error);
	});
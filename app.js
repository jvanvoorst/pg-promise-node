var connection = require('./connection.js');
var pgp = require('pg-promise');

var db = pgp(connection);
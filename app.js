var connection = require('./connection.js');
var pgp = require('pg-promise')({
	// Initialization Options
});

var db = pgp(connection);

var date = new Date('2016, 1, 15');

// var query = "SELECT rm.* FROM ".SIERRA_record_metadata." INNER JOIN ".SIERRA_bib_view." ON rm.record_num = bv.record_num WHERE rm.record_last_updated_gmt > $/date/ AND rm.record_type_code = $b AND bv.bcode3 = $- ORDER BY rm.record_last_updated_gmt ASC LIMIT 10;";
// var querySimple = "SELECT rm.* FROM ".SIERRA_record_metadata" LIMIT 5";


db.query("SELECT * FROM SIERRA_VIEW.record_metadata LIMIT 5")
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log('Error :')
		console.log(error);
	});
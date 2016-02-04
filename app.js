var connection = require('./connection.js');
var pgp = require('pg-promise')({
	// Initialization Options
});

var db = pgp(connection);

var query = 'SELECT rm.* FROM ".SIERRA_record_metadata." INNER JOIN ".SIERRA_bib_view." ON rm.record_num = bv.record_num WHERE rm.record_last_updated_gmt > '".$date."' AND rm.record_type_code = 'b' AND bv.bcode3 = '-' ORDER BY rm.record_last_updated_gmt ASC;'

db.query(query)
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log(error);
	});

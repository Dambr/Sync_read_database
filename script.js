var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : ,	// host
  user     : ,	// login
  password : ,	// password
  database : 	// database
});

connection.connect();

var X;

var promise = new Promise(function(resolve, reject){
	connection.query('SELECT /* value */ FROM /* table_name */ WHERE /* condition */', function(err, result) {
		X = result[0]./* value */;
		resolve(X);
	});
});


promise
	.then(
		resolve => console.log(X),
		reject  => console.log('Error')
	);


connection.end();
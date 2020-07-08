const mysql=require("mysql");

module.exports={
	"sel":(res,type)=>{
		var conn = mysql.createConnection({
  			host     : '127.0.0.1',
  			user     : 'root',
  			password : '',
  			database : 'diner'
		});
		var sql=`SELECT * FROM ${type}`;
		conn.query(sql, function (err, result) {
  			res.end(JSON.stringify(result));
		});
		conn.end();
	},
}
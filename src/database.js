var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'employees',
    user: 'root',
    password: 'Raunak@1234',
    insecureAuth:true

});

module.exports = connection;
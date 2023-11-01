const {createPool}= require('mysql');
const Pool=createPool({
    host:"locathost",
    user:"rooot",
    password:"Raunak@123",
    database:"details",
    connectionLimit:20
});
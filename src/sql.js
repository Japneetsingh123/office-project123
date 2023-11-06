const mysql=require('mysql');
const connection=
mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Raunak@1234',
    database:'details'
});
connection.connect((error)=>{
    if(error){
        console.error('Error connecting to MYSQL database',error);
    } else{
        console.log("Connected to MYSQL database!");
    }
});

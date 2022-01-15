const mysql=require('mysql');

const pool=mysql.createPool({
    connectionLimit:10,
    host:'sql6.freesqldatabase.com',
    port:'3306',
    database:'sql6465731',
    user:'sql6465731',
    password:'hyvkSrRsky'
})

module.exports=pool;

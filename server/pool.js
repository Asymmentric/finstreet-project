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

// create table crypto(id int primary key auto_increment,name varchar(20) not null,last varchar(10) not null default '0.0',buy varchar(10) not null default '0.0',sell varchar(10) not null default '0.0',volume varchar(10) not null default '0.0',base_unit varchar(25) not null);

// const store=(req,res,next)=>{
//     request.get('https://api.wazirx.com/api/v2/tickers',(e,r,d)=>{
//         console.log(r.statusCode);
//         if(!e){
//             for (let index = 0; index <10; index++) {
//                 data[Object.keys(JSON.parse(d))[index]]=Object.values(JSON.parse(d))[index]
//             }
//             let sql2='delete from crypto';
//             let sql=`insert into crypto (name,last,buy,sell,volume,base_unit) values`;
//             for (const key in data) {
//                     sql=sql+` ('${data[key].name}','${data[key].last}','${data[key].buy}','${data[key].sell}','${data[key].volume}','${data[key].base_unit}'),`
//             }
                
            
//             pool.getConnection((err,connection)=>{
//                 if(err) throw err;
//                 connection.query(sql2,(error2)=>{
//                     if(error2) throw error2;
//                 })
//                 connection.query(sql.substring(0,sql.length-1),(error)=>{
//                     connection.release();
//                     if(error){
//                         throw error;
//                     }else{
//                         console.log("Entered");
//                     }
//                 })
//             })
            
            
//         }else{throw e;} 
    
    
//     })
// }
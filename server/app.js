const express=require('express');
const request = require('request');
const path=require('path')
const pool=require('./pool')

const app=express();

const port= process.env.PORT || 3030
let data={}
let dataRefresh=(req,res,next)=>{
    request.get('https://api.wazirx.com/api/v2/tickers',(e,r,d)=>{
        console.log(r.statusCode);
        if(!e){
            for (let index = 0; index <10; index++) {
                data[Object.keys(JSON.parse(d))[index]]=Object.values(JSON.parse(d))[index]
            }
            let sql2='delete from crypto';
            let sql=`insert into crypto (name,last,buy,sell,volume,base_unit) values`;
            for (const key in data) {
                    sql=sql+` ('${data[key].name}','${data[key].last}','${data[key].buy}','${data[key].sell}','${data[key].volume}','${data[key].base_unit}'),`
            }
                
            
            pool.getConnection((err,connection)=>{
                if(err) throw err;
                connection.query(sql2,(error2)=>{
                    if(error2) throw error2;
                })
                connection.query(sql.substring(0,sql.length-1),(error)=>{
                    connection.release();
                    if(error){
                        throw error;
                    }else{
                        console.log("Entered");
                    }
                })
            })
            
            
        }else{throw e;} 
    
    
    })
    next();
}
app.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'../client/index.html'))

})
    // console.log(Object.keys(JSON.parse(d)));

app.get('/fetch/data',dataRefresh,(req,res)=>{
    let sql5=`select * from crypto`;
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        
        connection.query(sql5,(error,data)=>{
            connection.release();
            if(error){
                throw error;
            }else{
                console.log("Entered");
                res.send(data)
            }
        })
    })
    
})




app.use(express.static(path.join(__dirname,'../client')))
app.listen(port, console.log('Active on ',port))
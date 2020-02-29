 require('env2')('.env');
const {Pool}= require('pg');
const option = {
    connectionString:process.env.DB_URL,
    ssl:true
}
module.exports=new Pool(option)
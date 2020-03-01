 require('env2')('.env');
const {Pool}= require('pg');
let dbUrl = '';
 if (process.env.NODE_ENV == 'development') {
  dbUrl = process.env.DB_URL;
} else {
  dbUrl = process.env.DATABASE_URL;
}
if (!dbUrl) throw new Error('No Database URL');

const option = {
    connectionString: dbUrl,
    ssl: true,
  };
module.exports=new Pool(option)
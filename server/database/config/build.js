const connection = require('./connection');
const {readFileSync}=require('fs');
const {join}=require('path');

const build=()=>{
    connection.query(readFileSync(join(__dirname,'build.js')).toString());
}

module.exports=build;
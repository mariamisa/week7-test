const connection= require('../config/connection');

const addCity = (data)=>{
    const name=data.user_n;
    const city=data.city;
    return connection.query('insert into cities (user_n,city) values($1,$2) RETURNING *',[name,city]);
}

module.exports=addCity;
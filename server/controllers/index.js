const express = require("express");
const getCities=require('../database/queries/getCities');
const addCity=require('../database/queries/addCity');

const router = express.Router();

router.get('/cities',(req,res)=>{
    getCities().then(result=>res.json(result.rows)).catch(console.error)

})
router.post('/add-city',(req,res)=>{
    const data=req.body;
    addCity(data)
    .then(()=>res.redirect('/'))
    .catch(console.error);
})

module.exports = router;

const express= require('express');
const route = express.Router({
    mergeParams:true
});

route.get('/', (req, res, next)=>{
    res.status(200).json({Message:"Hi from AWS Lambda"});
})

module.exports = route;

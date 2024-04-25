const express = require('express');

const router = express.Router();

router.get('/home', (req, res)=>{
    res.send('This is the root DIR of customer Route')
})


module.exports =router
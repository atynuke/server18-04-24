const express = require('express');

const router = express.Router();


//for  making the home end point path
router.get('/', (req, res)=>{
    res.send('This is the root DIR of expressRoute')
})


// for making provision for reDirect path
router.get('/name', (req, res)=>{
res.redirect('https://google.com')
})


module.exports =router
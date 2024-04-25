const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('This is the root DIR of customer Route')
})

router.get('/create', (req, res)=>{
    res.send('This is the create DIR of customer Route')
})
router.get('/update', (req, res)=>{
    res.send('This is the update DIR of customer Route')
})
module.exports =router;











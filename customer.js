const express = require('express');
const customer = require('./customer');
const router = express.Router();


// const customer = []
router.get('/', (req, res)=>{
    res.send('This is the root DIR of customer Route')
})

router.get('/create', (req, res)=>{
    res.send('This is the create DIR of customer Route')
})
router.get('/update', (req, res)=>{
    res.send('This is the update DIR of customer Route')
})


router.get('/create/:name/:age', (req, res)=>{
    console.log(req.body);
    res.send(400).send({
        "name":"Hello"
    });
})


router.get('/create', (req, res)=>{
    const {name, age, nick} = req.body;
    const data = {
        name:name,
        age:age,
        nick:nick
    }

    customer.push(data);
    console.log(customer);;
    res.send(400).send(data);
});

//request query, request params, request body 









module.exports =router;











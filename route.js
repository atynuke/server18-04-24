 const execute = () => {
console.log('execute has been called');
 }

 const user= {
    name: 'teni',
    age: '22',
    class: 'BatchB'
}
const userList =[];


const express = require('express')
const router = express.Router();

const route = (server) => {
    server.get("/home", (req, res)=>{
        console.log(req.url);
        res.status(200).send(JSON.stringify('you are in class route...'));
    })
}
module.exports = route;
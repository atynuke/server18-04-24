const express = require("express");
const route = require('./expressRouter');
const customer = require('./customer')
const server = express();
const port = 3030;

const user= {
    name: 'teni',
    age: '22',
    class: 'BatchB'
}

// server.use(execute)
server.use(express.json());
const userList =[];

route(server);
server.use('./customer', customer)


server.get("/home", (req, res) => {
  console.log(req);
  res.status(200).send(JSON.stringify('Welcome Home!'));
});

server.get("/user", (req, res) => {
    res.status(200).send(user);
    res.end()
})

server.post("/user", (req, res) => {
    console.log(req);
  userList.push('Sample')
    res.status(200).send(userList);
    
})

server.get("/user", (req, res) => {
    res.status(200).send(JSON.stringify('You are in Class route...'));
})

server.get("/class", (req, res) => {
    console.log(req.url);
    res.status(200).send(JSON.stringify('You are in Class route...'));
  });  


server.listen(port, "localhost", () => {
  console.log(`Server Listening on Port ${port}`);
});










































// const fileSystem = require("fs");
// const callback = (a, b) => {};

// To create a text file (sample.txt)
// fileSystem.writeFile("Sample.txt", "Hello", () => {
//   console.log("Done");
// });
// To create an html file (sample.html)
// fileSystem.writeFile("Sample.html", "<h1>Welcome!</h1>", () => {
//   console.log("Done");
// });

// callback suppliers the error and the data, when there is argument
// fileSystem.writeFile("Sample.html", "<h1>Welcome!</h1>", (err, data) => {
//   console.log("Err:", err);
//   console.log("Data", data);
//   console.log("Done");
// });

// const fs = require("fs");
// const callback = (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File Created Successfully!");
//   }
// };

// fileSystem.writeFile("Sample.html", "<h1>Welcome!</h1>", callback);

// fileSystem.readFile('Sample.html', {encoding: 'utf-8'}, (err, data)=>{
// if (err){
//     console.error(err)
// } else {
//     console.log(data);
// }
// });
// fileSystem.appendFile("log.txt", err());
// fileSystem.readFile('Sample.html', err.toString(), (err, data)=>{
//     if (err) {
//         console.error(err);
//       } else {
//         console.log(data);
//       }
// });

// if there is an error
// fileSystem.appendFile(
//   "./file/Sample.html",
//   "<p>This is a new paragraph</p>",
//   (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

// what are modules?
// node modules, developer modules, third party
//
//developer modules
// const  {add, checkEven} = require("./mymodules/Specials")

//  console.log(checkEven(3));

// // to use a third party module - node package manager-

// const os = require("os")
// console.log(os.homedir());

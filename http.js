// const { log } = require("console");
// const http = require("http")

// console.log(http)

// //req-require res- response
// //res.end will end the server
// // const server = http.createServer((req, res)=>{

// //     res.writeHead(200, {"Content-Type": "text/html"})
//     // res.end(Hello world)
// //     )

//     //    res.end("This is from the server")
//     // console.log(req);
//     // console.log(res);

//  server.listen(5000, ()=>{
//     console.log("server is running on the port 5000");
//  })

// const server = http.createServer((req, res)=>{

//     if (req.url==="/home"){
//         res.writable(200,{"Content-type": "application/json"})
//         res.end("<h1>Hello world</h1>")
//     }
//     res.end("try again")
// })





const http = require("http")
const fs = require("fs");

// fileSystem.readFile("Sample.html", (callBack) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-type": "text/plain" });
    fs.readFile("Sample.html", "utf8", (err,data)=>{
        if (err) {
            console.error(err)
            res.end("something went wrong!")
          } else {
            console.log(data);
            res.end(data.toString());
          }
    })
  } 
});

server.listen( 3000,()=>{
    console.log(`server is running on the port 3000`);
})

    res.end("try again")

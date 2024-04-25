//  const execute = () => {
// console.log('execute has been called');
//  }


const router = express.Router();


const route =(server) => {
    server.get("/class", (req, res) => {
        console.log(req.url);
        res.status(200).send(JSON.stringify('You are in Class route...'));
})}

module.exports = route;
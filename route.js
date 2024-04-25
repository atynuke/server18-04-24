//  const execute = () => {
// console.log('execute has been called');
//  }

const route =(app) => {
    app.get("/class", (req, res) => {
        console.log(req.url);
        res.status(200).send(JSON.stringify('You are in Class route...'));
})}


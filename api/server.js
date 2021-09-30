const express = require('express');
const { download } = require('server/reply');

const server = express();

server.use(express.json());

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.get('/download', (req, res, next) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath, err => {
        if (err) {
            next(err);
        } else {
            console.log('file sent successfully.');
        }
    });
});

//express is designed to know that the err argumnent supplied to next() on ln:17 is the err handling middlware written elseweher like this below. Express knows that the following is error handling middleware because it has four arguments applied to it.  
server.use((err, req, res, next) => {
    console.log(err);
    res
    .status(500)
    .json({
        message: 'There was an error performin the required operation',
        error: err.message
    })
})

module.exports = server;

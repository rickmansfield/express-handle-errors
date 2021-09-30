// require your server and launch it
require('dotenv').config()

const server = require('./api/server');

const port = process.env.PORT;
server.listen(port, () => {
    console.log('Listening on PORT:', port);
})
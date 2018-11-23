//Imports 
let express = require('express');
let apiRouter = require('./route/apiRouter').router;
let bodyParser = require('body-parser');

//Instantiation
let server = express();

//Const
const PORT = 8080;

//Middlewares
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use('/api/', apiRouter);

//listen
server.listen(this.PORT, () => {
    console.log('le serveur a demarré sur le port', this.PORT);
})
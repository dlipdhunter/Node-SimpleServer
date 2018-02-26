var http    = require('http'),    
    port = process.env.port || 5000;

var apiServer = require('./apiserver');
var sac = require('./controllers/simpleapicontroller');

var api = new apiServer.ApiServer();

// Controllers
var simpleApiController = new sac.SimpleApiController();

// Register controllers
api.register('/api/sac/', simpleApiController);

// Http server
http.createServer((request, response) => {

    api.request(request, response);    

}).listen(port);

console.log('Server running at http://localhost:' + port);

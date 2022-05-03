const taskrouter = require('./task');

function route(app){
    app.use('/',taskrouter);
}

module.exports = route;
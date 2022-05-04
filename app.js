const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const route = require('./router/index');
const db = require('./config/db/connect');
const notfound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

console.log(path.join(__dirname, 'public'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.use(express.static(path.join(__dirname, 'public')));


db.connect();

route(app);

app.use(notfound);
app.use(errorHandlerMiddleware);

app.listen(PORT,()=>{
    console.log('listening on port ' + PORT);
})
const mongoose = require('mongoose');
require('dotenv').config()
async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URI,
        { useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,}
        );
        console.log('Connect successfully');
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {connect};
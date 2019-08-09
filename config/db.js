const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
    try{
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
      console.log('DB Connected')
    }
    catch(err){
   console.error(err.message);
   //Exit process with faliure
   process.exit(1);
    }
}

module.exports = connectDB;

// "mongoURI": "mongodb+srv://mudassar123:mudassar755@socialnetwork-jzffh.mongodb.net/test?retryWrites=true&w=majority",

// "mongoURI": "mongodb://localhost:27017/devConnector",

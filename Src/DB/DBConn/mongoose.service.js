import mongoose from 'mongoose';
import 'dotenv/config';
import config from '../../../config/env.config.js';
let count = 0;

const options = {
    //autoIndex: false, // Don't build indexes
    //poolSize: 3, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    //bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true
    
};
//var dbo=db.db(myDb);
// dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect(`${config.MONGODB_CONNSTR}/portfolio`, options).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err=>{
        console.log(err);
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();
//const mongoose=mongoose;
//Module.exports={mongoose};
export default mongoose;
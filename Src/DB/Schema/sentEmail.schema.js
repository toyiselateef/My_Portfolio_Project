
import '../DBConn/Database.js';'../DBConn/Database.js';
import validator from 'validator';
import timestamp from '../timestamp.js'
import mongoose from 'mongoose';
let sentMailSchema = new mongoose.Schema({
  messageId: {
    type: String,
    required: true,
    unique: true,
     }, 
    desc: String,
    clientName:String
  }
);
sentMailSchema.plugin(timestamp);

sentMailSchema.virtual('id').get(function () {
      return this._id.toHexString();
  });
// pfolioSchema.pre('save', function (next) {
//   let now = Date.now()
   
//   this.date = now
//   // Set a value for createdAt only if it is null
//   // if (!this.createdAt) {
//   //   this.createdAt = now
//   // }
  
//   // Call the next function in the pre-save chain
//   next();   
// })
// pfolioSchema.virtual('id').get(function () {
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// pfolioSchema.set('toJSON', {
//   virtuals: true
// });

// pfolioSchema.findById = function (cb) {
//   return this.model('portfolioSchema').find({id: this.id}, cb);
// };

 const pfoliomodel = mongoose.model('sentEmail', sentMailSchema,'sent_Emails');
 export default pfoliomodel

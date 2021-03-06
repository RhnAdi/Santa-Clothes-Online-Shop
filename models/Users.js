const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema ({
   username : {
      type     : String,
      required : true
   },
   email : {
      type     : String,
      required : true
   },
   password : {
      type : String,
      required : true
   },
   profile : {
      type     : Object,
      required : false
   }
}, { timestamps : true })

mongoose.models = {};

const User = mongoose.model('User', UserSchema);

export default User;
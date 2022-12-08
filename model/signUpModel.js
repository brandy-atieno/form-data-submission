const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  select: {
    type: String,
    required: true,
  },
});
const User=mongoose.model('sigins',userSchema);
module.exports=User;

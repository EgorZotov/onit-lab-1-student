var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
  login: String,
  password: String,
  first_name: String,
  last_name: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;

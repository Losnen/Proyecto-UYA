var mongoose  = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/usuarios");

var userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String
});

var User = mongoose.model("User",userSchema);

module.export = User;

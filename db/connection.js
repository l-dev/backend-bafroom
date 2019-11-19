const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/bafroom", { useNewUrlParser: true }, () => {
  console.log("We connected!!!");
});

mongoose.Promise = Promise;
module.exports = mongoose;
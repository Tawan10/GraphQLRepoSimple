const mongoose = require("mongoose");
const Song = mongoose.model("song");
module.exports = function() {
  // stuff
  console.log("triger find all song");
  return Song.find({});
};

const mongoose = require("mongoose");
const Song = mongoose.model("song");
module.exports = function(title) {
  // stuff
  console.log("triger add song");
  return (new Song({title})).save();
};

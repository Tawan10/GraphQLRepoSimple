const mongoose = require("mongoose");
const Song = mongoose.model("song");
module.exports = function(id) {
    // stuff
    console.log("triger find song by id");
    return Song.findById(id);
  };
  
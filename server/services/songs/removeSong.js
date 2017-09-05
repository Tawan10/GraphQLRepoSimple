const mongoose = require("mongoose");
const Song = mongoose.model("song");
module.exports = function(id) {
    // stuff
    console.log("triger remove song");
    return Song.remove({_id: id});
  };
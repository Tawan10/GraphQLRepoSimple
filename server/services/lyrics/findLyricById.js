const mongoose = require("mongoose");
const Lyric = mongoose.model("lyric");
module.exports = function(id) {
    // stuff
    console.log("triger find lyric by id");
    return Lyric.findById(id);
  };
  
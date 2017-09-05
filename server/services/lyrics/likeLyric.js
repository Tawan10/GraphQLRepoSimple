const mongoose = require("mongoose");
const Lyric = mongoose.model("lyric");
module.exports = function(id) {
    // stuff
    console.log("triger like lyric by id");
    return Lyric.like(id);
  };
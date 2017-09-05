const mongoose = require("mongoose");
const Song = mongoose.model("song");
module.exports = function(songId,content) {
  // stuff
  console.log("triger add lyric");
  return Song.addLyric(songId, content);
};

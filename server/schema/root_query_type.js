const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const SongType = require("./song_type");
const LyricType = require("./lyric_type");
const Lyric = mongoose.model("lyric");
const Song = mongoose.model("song");
const songServices = require("../services").songs;
const lyricServices = require("../services").lyrics;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return songServices.findAllSongs();
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return songServices.findSongById(id);
      }
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return lyricServices.findById(id);
      }
    }
  })
});

module.exports = RootQuery;

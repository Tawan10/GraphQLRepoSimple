const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLID} = graphql;
const mongoose = require('mongoose');
const Song = mongoose.model('song');
const Lyric = mongoose.model('lyric');
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const songService = require('../services').songs;
const lyricService = require('../services').lyrics;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: {
          type: GraphQLString
        }
      },
      resolve(parentValue, {title}) {
        return songService.addSong(title);
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: {
          type: GraphQLString
        },
        songId: {
          type: GraphQLID
        }
      },
      resolve(parentValue, {content, songId}) {
        return songService.addLyric(songId,content);//Song.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, {id}) {
        console.log(id)
        return lyricService.likeLyric(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, {id}) {
        return songService.removeSong(id);
      }
    }
  }
});

module.exports = mutation;

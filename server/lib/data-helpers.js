"use strict";

// Simulates the kind of delay we see with network or filesystem operations


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      // simulateDelay(() => {
        db.collection('tweets').insertOne(newTweet);
        callback(null, true);
      // });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {

        // const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        db.collection('tweets').find().toArray((err, tweets) => {
          if(err) {
            return callback(err);
          }
          callback(null, tweets)
          // db.close()

        });

      } 
  };
  
}
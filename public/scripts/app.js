/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
{
  /* <script src="https://code.jquery.com/jquery-1.10.2.js"></script> */
}

$(document).ready(function() {
  const data = [
      {
        "user": {
          "name": "Newton",
          "avatars": {
            "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
          },
          "handle": "@SirIsaac"
        },
        "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
      },
      {
        "user": {
          "name": "Descartes",
          "avatars": {
            "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
            "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
            "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
          },
          "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      },
      {
        "user": {
          "name": "Johann von Goethe",
          "avatars": {
            "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
            "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
            "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
          },
          "handle": "@johann49"
        },
        "content": {
          "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
      }
    ];

  function renderTweets(tweets) {
    //we get the tweet data and want to loop through the data
    tweets.forEach(function(tweet) {
      var tweetElement = createTweetElement(tweet);
      $("#container").append(tweetElement);
    });
  }

  function createTweetElement(tweetObj) {
    console.log("createTweetELement", tweetObj);
    return $.parseHTML(`
        <article>
            <header class='topheader'>
                <section class='toparea'>
                    <img src='${
                        tweetObj.user.avatars.regular
                        }' alt='TweeterPic' width="60" height='60'>
                    <h1>${tweetObj.user.name}</h1>
                    <h4>${tweetObj.user.handle}</h4>
                </section>  
            </header>
            <section class='tweetarea'>
               <h3>${tweetObj.content.text}</h3>
            </section>
            <footer>
                <section class='tweettime'>
                    <h5>${tweetObj.created_at}</h5>
                </section>
            </footer>
        </article>`
    );
  }
  renderTweets(data);
});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
{/* <script src="https://code.jquery.com/jquery-1.10.2.js"></script> */}

$( document ).ready(function(){


const tweetObj = {
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
  }


function createTweetElement(tweetObj){

  return (

    $.parseHTML(`<article>
    <header class='topheader'>
      <section class='toparea'>
        <img src='${tweetObj.user.avatars.regular}' alt='TweeterPic' width="60" height='60'>
        <h1>${tweetObj.user.name}</h1>
        <h4>${tweetObj.user.handle}</h4>
      </header>
        <section class='tweetarea'>
          <h3>${tweetObj.content.text}</h3>
        </section>
      <footer>
        <section class='tweettime'>
          <h5>${tweetObj.created_at}</h5>
        </section>
      </footer>
      </section>
  </article>`)

  )
}



var $tweet = createTweetElement(tweetObj);


$('#container').append($tweet)


})
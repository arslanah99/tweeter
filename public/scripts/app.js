/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
{
  /* <script src="https://code.jquery.com/jquery-1.10.2.js"></script> */
}




$(document).ready(function() {







function loadTweets(){
  $.ajax('/tweets', {method: 'GET'})
    .then(function(tweets){
      renderTweets(tweets)
    })
}




  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      var tweetElement = createTweetElement(tweet);
      $("#texts").prepend(tweetElement);
    });
  }


  $('form').submit(function(event){
    event.preventDefault()
    var contentLength = $('#TweetBox').val();
    var counting = $('.counter').val();
    console.log(contentLength.length)
  
    if(!contentLength){
      console.log(contentLength)
      alert('Not Allowed you must enter valid string')
    } else if(contentLength.length >= 140){
      alert('Too many characters')
    } else {
      $.ajax('/tweets', {
        method: 'POST',
        data: $('form').serialize(),
        complete: loadTweets
        // error: errorChecker
  
      })
      $('#TweetBox').val('')
  
    }
    
  
  })

  function createTweetElement(tweetObj) {
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
  loadTweets()


  // $('button>composebutton').click(function(){
  //   $('article').toggle();
  // })




});


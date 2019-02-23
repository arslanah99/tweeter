/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
{
  /* <script src="https://code.jquery.com/jquery-1.10.2.js"></script> */
}

$(document).ready(function() {
  $(".composebutton").click(function() {
    $(".new-tweet").slideToggle("slow");
    $("#TweetBox").focus();
  });
  function loadTweets() {
    console.log('Loading tweets');
    $.ajax("/tweets", { method: "GET" }).then(function(tweets) {
      console.log(tweets);
      renderTweets(tweets);
    });
  }
  function renderTweets(tweets) {
    $('#texts').empty();
    tweets.forEach(function(tweet) {
      var tweetElement = createTweetElement(tweet);
      $("#texts").prepend(tweetElement);
    });
  }
  $("form").submit(function(event) {
    event.preventDefault();
    var contentValue = $("#TweetBox").val();
    if (!contentValue) {
      console.log(contentValue);
      $('.emptystring').show()
      $('.toomanystrings').hide()
      // alert("Not Allowed you must enter valid string");
    } else if (contentValue.length >= 140) {
      $('.toomanystrings').show()
      $('.emptystring').hide()
    } else {
      $('.toomanystrings').hide()
      $('.emptystring').hide()
      
      $.ajax("/tweets", {
        method: "POST",
        data: $("form").serialize(),
        complete: loadTweets
      });
      $("#TweetBox").val("");
    }
  });

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
                    <h5>Ten Days Ago</h5>
                    <i class="fas fa-flag"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-heart"></i>
                </section>
            </footer>
        </article>`);
  }
  loadTweets();
});

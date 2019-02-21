/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
{
  /* <script src="https://code.jquery.com/jquery-1.10.2.js"></script> */
}

//attach the submit button to a post request
//console log 

// $(btn).click(function(){
//   $.post('/tweets', function(data){
//     $('#container').text(data);
// })

var btn = document.getElementById('btn')


$(document).ready(function() {


// $('form').submit(function( event ){
//   event.preventDefault()
//   var textData = ($(this).serialize())
//   $.post('/tweets', textData)
//   .done(function(data){

//   })
// })

$('form').submit(function(event){
  event.preventDefault()
  $.ajax('/tweets', {
    method: 'POST',
    data: $('form').serialize()
  })
  console.log($.ajax)
})


// $(function loadTweets(){
//   $('form').submit(function(){
//     $.ajax('/tweets', {method: 'GET'})
//   })
// })


$.getJSON('/tweets', function(data){
  $.each( data, function(key, val){
    renderTweets([val]);
  })
})

  const data = [
    
    ];

  function renderTweets(tweets) {
    //we get the tweet data and want to loop through the data
    tweets.forEach(function(tweet) {
      var tweetElement = createTweetElement(tweet);
      $("#texts").prepend(tweetElement);
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


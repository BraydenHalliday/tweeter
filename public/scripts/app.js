/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json

$(document).ready(function() {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
  
function escape(str) {
  var textArea = document.createElement('textArea');
  textArea.appendChild(document.createTextNode(str));
  return textArea.innerHTML;
}
function createTweetElement(data) {
  let userinput = escape(data.content.text)
  return `<article class="tweets-container">        
    <header class= 'tweetHeader'>
      <div>
        <img class="image" src=${data.user.avatars.small}>
        <span class='userName'> ${data.user.name} </span>
        <span class ='handle' >${data.user.handle}</span>
      </div>
    </header>
    <section class= 'tweetBody'>
      <span class = 'tweetcontent' >${userinput}</span>
    </section
    <footer class= 'tweetFooter'>
      <span class = 'tweetAge' >${data.created_at}</span>
    </footer>
  </article>`
}

function renderTweet(tweet) {
  $('#tweets').prepend(tweet);  
}

function loadTweets () {
  $.ajax('/tweets', { method: 'get'})
    .then(function (tweets) {
      console.log('egwfwiefbqe;cjwqbef', tweets);
    tweets.forEach((tweet) => { 
      let newTweet = createTweetElement(tweet)
      renderTweet(newTweet)
    })
  })
}
// the functiom for handleing tweet creation and errors
$(function() {
  var $form = $('#tweetform');
  $form.on('submit', function (event) {
    event.preventDefault()
// empty string / null logic (it said to include both in the instructions but I -
//beleive including it is a redundancy with us already checking for an empty string 
    if($('textarea').val() === '' || $('textarea').val() === null) {
      $('#errorM').text("A minimum of 1 charector is required")
// too many charectors logic 
    } else if($('textarea').val().length > 140) {
      $('#errorM').text("Too many charectors! The maxium is 140")
// tweet creation logic  aswell as counter and text area reset 
    } else {
      $('#errorM').text("")
      $.ajax('/tweets', { 
        method: 'POST',
        data: $(this).serialize(),
        success: function (tweet) {
          let newTweet = createTweetElement(tweet)
          $('#tweets').prepend(newTweet);
          $('textarea').val('')
          $('.counter').text(140)
        }
      })
    }
  })
})
// event listener for compose button to toggle the new -
//tweet field and focus it when aplicable 
$('.compose').click(function () {
  $('.new-tweet').toggle('fast')
  $('textarea').focus()
})
// loads tweets last 
loadTweets()

});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json


    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
  

  function createTweetElement(tdata) {
    return `<article class="tweets-container">        
        <header class= 'tweetHeader'>
            <div>
                <img class="image" src=${tdata.user.avatars.small}>
                <span class='userName'> ${tdata.user.name} </span>
                <span class ='handle' >${tdata.user.handle}</span>
            </div>
        </header>
        <section class= 'tweetBody'>
            <span class = 'tweetcontent' >${tdata.content.text}</span>
        </section
        <footer class= 'tweetFooter'>
            <span class = 'tweetAge' >${tdata.created_at}</span>
        </footer>
        </article>`
}

function renderTweet(tweet) {
    $('#tweets').append(tweet);
    
}


    function loadTweets () {
      
      $.get('/tweets', function (tweets) {
       
        tweets.forEach(tweet => { 
          let newtweet = createTweetElement(tweet)
          renderTweet(newtweet)
        })
      })
    }
    

    
        $(function() {
          var $form = $('#tweetform');
         
          $form.on('submit', function (event) {
            event.preventDefault()

            if($('textarea').val() === '' || $('textarea').val() === null) {
              alert('cant submit empty posts!');
            } else if($('textarea').val().length > 140) {
              alert('Too many charectors!');

            } else {

              $.ajax('/tweets', { 
                method: 'POST',
                data: $(this).serialize(),
                success: function (newtweet) {
                  let NewTweet = createTweetElement(newtweet)
                  $('#tweets').prepend(NewTweet);
                }
              } )
            }
          })
        })
             //data.prepend(createTweetElement(tdata))
           // .then(function (morePostsHtml) 
            //  $button.replaceWith(morePostsHtml);
            
      

    loadTweets()

  
  
  // Test / driver code (temporary)
//  console.log($tweet); // to see what it looks like
 // $('#tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc
 // $('#tweets').append($tweet);
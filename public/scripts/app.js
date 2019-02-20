/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
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

function renderTweets(tweets) {
    for(tweet in tweets) {
        let $ntweet = createTweetElement(tweets[tweet]);
        $('#tweets').append($ntweet);
    }
}

  renderTweets(data);
  
  // Test / driver code (temporary)
//  console.log($tweet); // to see what it looks like
 // $('#tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc
 // $('#tweets').append($tweet);
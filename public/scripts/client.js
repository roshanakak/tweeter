/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const createTweetElement = function(tweetObj) {
    return `<article>
              <header>
                  <div>
                    <img src=${tweetObj.user.avatars} alt="Avatar" class="avatar">
                    ${tweetObj.user.name}
                  </div>
                  <label>${tweetObj.user.handle}</label>
              </header>
              <content>
                <div>${tweetObj.content.text}</div>
              </content>
              <footer>
                <label>${timeago.format(tweetObj.created_at)}</label>
                <div>
                  <i class="fas fa-flag"></i>
                  <i class="fas fa-retweet"></i>
                  <i class="fas fa-heart"></i>
                </div>
              </footer>
            </article>
            <br/>`;
  
  };
  
  const renderTweets  = function(tweetObjArray) {
    tweetObjArray.forEach(element => {
      const $tweet = createTweetElement(element);
      $('#tweets-container').append($tweet);
    });
  
  };
  renderTweets(data);
});
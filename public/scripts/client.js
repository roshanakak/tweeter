/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

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
              <label>${tweetObj.created_at}</label>
              <div>
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </div>
            </footer>
          </article>
          <br/>`;

};



// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);


});
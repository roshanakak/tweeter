$(document).ready(function() {


  //creates html elements for displaying a tweet
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
  
  // receives an array of tweets and creates html content for them
  const renderTweets  = function(tweetObjArray) {
    tweetObjArray.forEach(element => {
      const $tweet = createTweetElement(element);
      $('#tweets-container').append($tweet);
    });
  };

  // gets an array of tweets from /tweets route
  const loadtweets = function() {
    $.getJSON('/tweets', function(tweetsdata) {
      let sortedTweets = tweetsdata.sort((a,b) => a.created_at > b.created_at && -1 || 1);
      renderTweets(sortedTweets);
    });
  };

  loadtweets();


  // to escape XSS injection
  const escape = function (str) {
    let input = $("<div>").text(str);
    return "text=" + input[0].innerHTML;

  };

  // uses ajax post instead of ordinary html post for submitting tweets
  $(".new-tweet-form").submit(function(event) {
    event.preventDefault();
    if ($("#tweet-text").val().length === 0) {
      $('#new-tweet-error').text('The tweet content is empty!');
    } else if ($("#tweet-text").val().length > 140) {
      $('#new-tweet-error').text('The tweet content is too long! It should be limited to 140 characters.');
    } else {
      $('#new-tweet-error').text('');
      $.post("/tweets", escape($('#tweet-text').val()));
      window.location.reload();
    }  
  });

});
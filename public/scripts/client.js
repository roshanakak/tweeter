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

  const escape = function (str) {
    //str = str.replace(/(<([^>]+)>)/ig,"");
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  $(".new-tweet-form").submit(function(event) {
    event.preventDefault();
    if ($("#tweet-text").val().length === 0) {
      alert('The tweet content is empty!');
    } else if ($("#tweet-text").val().length > 140) {
      alert('The tweet content is too long! It should be limited to 140 characters.');
    } else {
      //let tempObj = `text=${escape($("#tweet-text").val())}`;
      
      $.post("/tweets", $(".new-tweet-form").serialize());
      window.location.reload();
    }  
  });

  const loadtweets = function() {
    $.getJSON('/tweets', function(tweetsdata) {
      let sortedTweets = tweetsdata.sort((a,b) => a.created_at > b.created_at && -1 || 1);
      renderTweets(sortedTweets);
    });
  };

  loadtweets();

});
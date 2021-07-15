const isValidTweet = function(content) {
  return content.length > 0 && content.length <= 140;
};

module.exports = isValidTweet;
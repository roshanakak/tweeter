$(document).ready(function() {

  // makes sure the tweet is less than 140 chars
  $("#tweet-text").keyup(function() {
    $('#new-tweet-error').text('');
    $(".counter").html(140 - this.value.length);
    if (this.value.length > 140) {
      $(".counter").addClass('counterRed').removeClass('counterBlack');
    } else {
      $(".counter").addClass('counterBlack').removeClass('counterRed');
    }
  });
});

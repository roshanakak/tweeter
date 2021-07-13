$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    $(".counter").html(140 - this.value.length);
    if (this.value.length > 140) {
      $(".counter").addClass('counterRed');
      $(".counter").removeClass('counterBlack');
    } else {
      $(".counter").addClass('counterBlack');
      $(".counter").removeClass('counterRed');
    }
  });
});

$(document).ready(function() {

  // togggle new tweet form on clicking compose
  document.querySelector("#arrows").addEventListener("click", (e) => {
    e.preventDefault();
    $(".new-tweet").toggle();
  });

  document.querySelector("#write-new-tweet").addEventListener("click", (e) => {
    e.preventDefault();
    $(".new-tweet").toggle();
  });


  // showing and working of the scroll to top button
  window.onscroll = function() {
    scrollFunction();
  };
  
  const scrollFunction = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#myBtn").show();
      $("#write-new-tweet-div").hide();
    } else {
      $("#myBtn").hide();
      $("#write-new-tweet-div").show();
    }
  };

  document.querySelector("#myBtn").addEventListener("click", (e) => {
    e.preventDefault();
    $("#tweet-text").focus();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

});
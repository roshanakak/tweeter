$(document).ready(function() {

  document.querySelector("#arrows").addEventListener("click", (e) => {
    e.preventDefault();
    $("#tweet-text").focus();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });    
  });

  document.querySelector("#write-new-tweet").addEventListener("click", (e) => {
    e.preventDefault();
    $("#tweet-text").focus();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

  const mybutton = document.getElementById("myBtn");

  window.onscroll = function() {
    scrollFunction();
  };
  
  const scrollFunction = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      document.getElementById("write-new-tweet-div").style.display = "none";
    } else {
      mybutton.style.display = "none";
      document.getElementById("write-new-tweet-div").style.display = "block";
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
$(document).ready(function() {
  $(".readmore").click(readMoreClick);
  $(".readless").click(readLessClick);
  $(".learnmore").click(learnMoreClick);

  function readMoreClick() {
    event.preventDefault();
    $("#read-more-on-click").slideDown();
    $(".readmore").hide();
    $(".readless").show();
  }

  function readLessClick() {
    event.preventDefault();
    $("#read-more-on-click").slideUp();
    $(".readless").hide();
    $(".readmore").show();    
  }

  function learnMoreClick() {
    event.preventDefault();
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();    
  }

});

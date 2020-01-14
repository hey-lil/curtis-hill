$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $("#clickable-list").click(function() {
    $("#showing-list").toggle();
    $("#hiddden-list").toggle();
  });

  $(".clickable-img").click(function() {
    $("#slide-info-showing").slideToggle();
    // $("#slide-info-hidden").slideToggle();
  });

  $("button#less-green").click(function() {
    $("body").removeClass();
    $("body").addClass("less-green-background");
  })

  $("button#yellow-green").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-green-background");
  });

  $("button#dark-green").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-green-background");
  });
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

$(document).ready(function() {
  $("#clickable-list").click(function() {
    $("#showing-list").toggle();
    $("#hiddden-list").toggle();
  });
});
$(document).ready(function() {

 // Counts characters live while typing

  var maxlength = 140;
    $("#tweet-text").keyup(function(){
    var currentlength = $("#tweet-text").val().length;
    var remaining = maxlength-currentlength;
    $(".counter").text(remaining);

    if (currentlength > maxlength) {
      $(".counter").addClass( "negative" );
    } else {
      $(".counter").removeClass( "negative" );
    }
  });
});



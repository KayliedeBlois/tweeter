$(document).ready(function() {

  // --- our code goes here ---

  var maxlength = 140;
    $("#tweet-text").keyup(function(){
    var currentlength = $(this).val().length;
    var remaining = maxlength-currentlength;
    $(".counter").text(remaining);

    if (currentlength > maxlength) {
      $(".counter").addClass( "negative" );
    } else {
      $(".counter").removeClass( "negative" );
    }
  });
});


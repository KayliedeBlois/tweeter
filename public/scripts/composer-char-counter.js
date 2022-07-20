$(document).ready(function() {

  // --- our code goes here ---

  var maxlength = 140;
    $("#tweet-text").keyup(function(){
    var currentlength = $(this).val().length;
    var remaining = maxlength-currentlength;
    $(".counter").html(remaining);

    if (currentlength > maxlength) {
      $(".counter").addClass( "negative" );
    } else {
      $(".counter").removeClass( "negative" );
    }
    });
  
});

// const textarea = document.querySelector("tweet-text");

// textarea.addEventListener("input", ({currentTarget: target}) => {
//   const maxLength = target.getAttribute("maxlength");
//   const currentLength = target.value.length;

//   if (currentLength <= maxLength) {
//     // print black text 
//   }
//   else if (currentLength >= maxLength) {
//   //  print red text 
//     // need to counter to be negative and count backwards
//   }
//   console.log(blur);
//   console.log(maxLength - currentLength);

// });
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

createTweetElement = function(tweetData) {
const markup = `
  <section class="tweets flex" id="tweets-container">
    <header class="tweets-header">
      <div class="tweets-header-topright">
        <img id="profilePicture" src="${tweetData.user.avatars}">
        <label>${tweetData.user.name}</label>
      </div>
      <label id="tweeterHandle">${tweetData.user.handle}</label>
    </header>

    <article class="saved-tweet">${tweetData.content.text}</article>

    <footer class="tweets-footer">
      <time class="tweets-time">${tweetData.created_at}</time>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
`;
return markup;
};

// given an array of objects
renderTweets = function(data) {
  for (let object of data) {
    data.forEach(object => createTweetElement(object));
  const $tweet = createTweetElement(object);
  $('.container').append($tweet);
  }
};

// load tweets will create tweet containers for each
loadTweets = function() {
  $.get( "/tweets", function( data ) {
    renderTweets(data);
  });
};

loadTweets();

// Event Listener for Submit
$(".insert-tweet").submit(function(event) {
  event.preventDefault();
  console.log( $( this ).serialize() );

  $.ajax({
    url:'/tweets',
    type:'Post',
    data:$(this).serialize(),
  
  });
});


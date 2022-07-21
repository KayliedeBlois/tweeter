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

// // Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

renderTweets(data);

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

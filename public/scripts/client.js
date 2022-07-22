/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//const { request } = require("express");

$( document ).ready(function() {
  loadTweets();
});

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(".error").hide();

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

    <article class="saved-tweet">${escape(tweetData.content.text)}</article>

    <footer class="tweets-footer">
      <time class="tweets-time">${timeago.format(tweetData.created_at)}</time>
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
  const $tweet = createTweetElement(object);
  $('.tweet-container').prepend($tweet);
  }
};

// load tweets will create tweet containers for each
loadTweets = function() {
  $.get( "/tweets", function( data ) {
    renderTweets(data);
  });
};

addMostRecentTweet = function() {
  $.get( "/tweets", function( data ) {
    const markup = createTweetElement(data[data.length - 1]);
    $('.tweet-container').prepend(markup);
    console.log(markup);
  });
};

// Event Listener for Submit
$(".insert-tweet").submit(function(event) {
  $(".error").hide(); // hide errors when resubmitting a new tweet
  event.preventDefault();

let string = $(this).serialize()
let splitResult = string.split('=');
let expectedValue = splitResult[1];

// JQuery error message shows
if (expectedValue === "" || expectedValue === null) {
  $("#error-1").show(250);
} else if (expectedValue.length > 140) {
  $("#error-2").show(250);
} else {

  // $.ajax({
  //   url:'/tweets',
  //   type:'Post',
  //   data:$(this).serialize(),
  // });



const requestData = $(this).serialize();

$.post( "/tweets", requestData)
  .done(function( data ) {
    console.log(data);
    console.log('here'); //See if you can get a return from this request and use createTweetElement
    addMostRecentTweet();
  });
}
  
});


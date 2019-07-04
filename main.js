'use strict';

function getDogImage() {
    let userInput = $('input[type="number"]');
    let imageNumber = userInput.val();
    fetch('https://dog.ceo/api/breeds/image/random/' + imageNumber)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

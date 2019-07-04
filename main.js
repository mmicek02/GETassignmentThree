'use strict';

function getDogImage() {
    let userInput = $('input[type="text"]');
    let breedName = userInput.val();
    fetch('https://dog.ceo/api/breed/' + breedName + '/images/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`);

  //display the results section
  console.log('Ready to reveal images!');
  $('.results').removeClass('hidden');
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

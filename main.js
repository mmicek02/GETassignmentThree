'use strict';

function getDogImage() {
  let userInput = $('input[type="text"]');
  let breedName = userInput.val();
  fetch('https://dog.ceo/api/breed/' + breedName + '/images/random')
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.status == "success") {
        displayResults(responseJson)
      } else {
        alert("Something went wrong. We cannot find that breed.")
      }
    })
    .catch(error => alert("Something went wrong. We cannot find that breed."));
}

function displayResults(responseJson) {
  console.log(responseJson);
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    //display the results section
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

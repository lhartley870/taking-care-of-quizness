document.addEventListener('DOMContentLoaded', function() {
  displayUsername(); 
  calculateTotalScore(); 
  displayRoundStats(); 
})

function displayUsername() {
  let username = capitaliseUsername(); 
  let usernameSpan = document.getElementById('optional-username'); 

  if (username !== 'no username') {
    usernameSpan.innerHTML = username + ' '; 
  } 
}

function capitaliseUsername() {
  let username = sessionStorage.getItem('username');

  if (username !== null) {
    let capitalisedFirstLetter = username[0].toUpperCase(); 
    let restOfUsername = username.slice(1);
    let capitalisedUsername = capitalisedFirstLetter + restOfUsername; 
    return capitalisedUsername; 
  } else {
    return 'no username'; 
  }
}

function calculateTotalScore() {
  let allRoundScores = JSON.parse(sessionStorage.getItem('allRoundScores'));
}

function displayRoundStats() {

}

function findBestRoundsScores() {

}

function findBestRounds() {

}














// Wait for the DOM to finish loading before running functions to display results information on results page
document.addEventListener('DOMContentLoaded', function() {
  displayUsername(); 
  displayScoreCategory(); 
  displayRoundStats(); 
})

// displays capitalised username to personalise the results page (if the user has submitted a username)
function displayUsername() {
  let username = capitaliseUsername(); 
  let usernameSpan = document.getElementById('optional-username'); 

  if (username !== 'no username') {
    usernameSpan.innerHTML = username + ' '; 
  } 
}

// gets the user's submitted username from session storage and capitalises the first letter
function capitaliseUsername() {
  /* code for how to pass variables to and from sessionStorage taken from this website -
  https://lage.us/Javascript-Pass-Variables-to-Another-Page.html */
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

/* gets the user's overall quiz score and displays their score bracket and category in
the correct colour */
function displayScoreCategory() {
  let totalScore = calculateTotalScore(); 
  let quizScoreBracket = document.getElementById('quiz-score-bracket'); 
  let quizScoreName = document.getElementById('quiz-score-name'); 

  if (totalScore <= 5) {
    quizScoreBracket.innerHTML = '0 - 5'; 
    quizScoreBracket.classList.add('low-score');
    quizScoreName.innerHTML = 'Les Quizerables'; 
    quizScoreName.classList.add('low-score');
  } else if (totalScore >= 6 && totalScore <= 10) {
    quizScoreBracket.innerHTML = '6 - 10'; 
    quizScoreBracket.classList.add('medium-score');
    quizScoreName.innerHTML = 'Risky Quizness'; 
    quizScoreName.classList.add('medium-score');
  } else if (totalScore >= 11 && totalScore <= 15) {
    quizScoreBracket.innerHTML = '11 - 15'; 
    quizScoreBracket.classList.add('high-score');
    quizScoreName.innerHTML = 'The Quizard of Oz'; 
    quizScoreName.classList.add('high-score');
  } else {
    quizScoreBracket.innerHTML = 'Oops, sorry something went wrong with calculating your score'; 
  }
}

// gets the user's array of round numbers and scores from session storage and calculates the user's total score 
function calculateTotalScore() {
  /* code for how to pass variable arrays to and from sessionStorage taken from this website -
  https://lage.us/Javascript-Pass-Variables-to-Another-Page.html */
  let allRoundScores = JSON.parse(sessionStorage.getItem('allRoundScores'));
  let totalScore = 0;  

  for (let i = 0; i < allRoundScores.length; i++) {  
   totalScore += allRoundScores[i][1];
  }
  
  return totalScore; 
}

/* 
gets the user's total score and displays it in the stats table
chooses what goes into the html to display the user's best round(s) and best round score(s)
in the stats table depending on whether the user has just one best round or multiple best rounds 
*/
function displayRoundStats() {
  let totalScore = calculateTotalScore(); 
  let bestRoundNames = findBestRoundNames(); 
  let bestRoundNameTableData = document.getElementById('best-round-category'); 
  let bestRoundScores = findBestRoundScores();
  let bestRoundScoresTableData = document.getElementById('best-round-score'); 
  
  document.getElementById('total-score').innerHTML = totalScore; 

  if (bestRoundNames.length > 1) {
    for (let bestRoundName of bestRoundNames) {
      bestRoundNameTableData.innerHTML += `<p>${bestRoundName}</p>`; 
    }
  } else {
      bestRoundNameTableData.innerHTML = bestRoundNames[0]; 
  }  

  if (bestRoundScores.length > 1) {
    for (let bestRoundScore of bestRoundScores) {
      bestRoundScoresTableData.innerHTML += `<p>${bestRoundScore}/3</p>`; 
    }
  } else {
      bestRoundScoresTableData.innerHTML = bestRoundScores[0] + '/3'; 
  }  
}

// iterates through the user's round scores and creates an array of the scores
function findBestRoundScores() {
  let highScoreRounds = findBestRounds(); 
  let bestRoundScores = []; 

  for (i = 0; i < highScoreRounds.length; i++) {
    let highScore = highScoreRounds[i].score;
    bestRoundScores.push(highScore);  
  }
  
  return bestRoundScores; 
}

/* finds the user's best round number(s) and translates those into the round names
to be displayed in the stats table on the results page */ 
function findBestRoundNames() {
  let highScoreRounds = findBestRounds(); 
  let highestRoundNumbers = []; 
  let bestRoundNames = []; 

  for (i = 0; i < highScoreRounds.length; i++) {
    let highRounds = highScoreRounds[i].round;
    highestRoundNumbers.push(highRounds);  
  }

  for (highestRoundNumber of highestRoundNumbers) {
    if (highestRoundNumber === 1) {
      bestRoundNames.push('Movie Quotes <i class="fas fa-film"></i>');
    } else if (highestRoundNumber === 2) {
      bestRoundNames.push('Nature <i class="fab fa-canadian-maple-leaf"></i>'); 
    } else if (highestRoundNumber === 3) {
      bestRoundNames.push('Music <i class="fas fa-music"></i>'); 
    } else if (highestRoundNumber === 4) {
      bestRoundNames.push('True or False <i class="fas fa-check-circle"></i><i class="fas fa-times-circle"></i>'); 
    } else if (highestRoundNumber === 5) {
      bestRoundNames.push('Fish or Not a Fish <i class="fas fa-fish"></i>');
    } else {
      alert('Sorry, we cannot calculate your best Round(s) at this time'); 
    }
  }

  return bestRoundNames; 
}

// returns an array of round/score objects for the round(s) with the highest user score
function findBestRounds() {
  /* code for how to pass variable arrays to and from sessionStorage taken from this website -
  https://lage.us/Javascript-Pass-Variables-to-Another-Page.html */
  let allRoundScores = JSON.parse(sessionStorage.getItem('allRoundScores'));
  let roundScores = [
    { round: 1,
      score: allRoundScores[0][1]
    }, 
    { round: 2,
      score: allRoundScores[1][1]
    }, 
    { round: 3, 
      score: allRoundScores[2][1]
    },
    { round: 4, 
      score: allRoundScores[3][1]
    }, 
    { round: 5, 
      score: allRoundScores[4][1]
    }
  ]
  let scores = roundScores.map(roundScore => roundScore.score);  
  let highestScore = Math.max(scores[0], scores[1], scores[2], scores[3], scores[4]); 
  let highScoreRounds = roundScores.filter(roundScore => roundScore.score === highestScore); 
  console.log(highScoreRounds); 
  return highScoreRounds; 
}

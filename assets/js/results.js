document.addEventListener('DOMContentLoaded', function() {
  displayUsername(); 
  displayScoreCategory(); 
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
  } else if (totalScore >=11 && totalScore <= 15) {
    quizScoreBracket.innerHTML = '11 - 15'; 
    quizScoreBracket.classList.add('high-score');
    quizScoreName.innerHTML = 'The Quizard of Oz'; 
    quizScoreName.classList.add('high-score');
  } else {
    quizScoreBracket.innerHTML = 'Oops, sorry something went wrong with calculating your score'; 
  }
}

function calculateTotalScore() {
  let allRoundScores = JSON.parse(sessionStorage.getItem('allRoundScores'));

  let totalScore = 0;  

  for (let i = 0; i < allRoundScores.length; i++) {  
   totalScore += allRoundScores[i][1];
  }
  
  return totalScore; 
}

function displayRoundStats() {

}

function findBestRoundsScores() {

}

function findBestRoundsNames() {

}

function findBestRounds() {
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

  return highScoreRounds; 
}














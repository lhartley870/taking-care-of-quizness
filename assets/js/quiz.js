const quiz1 = [
  {
    questionOneCorrect: 'Field of Dreams',
    questionTwoCorrect: 'Terminator 2: Judgment Day',
    questionThreeCorrect: 'The Notebook', 
  },
  {
    questionOneCorrect: 'A murder',
    questionTwoCorrect: '98%',
    questionThreeCorrect: '3',
  }
]; 

// Wait for the DOM to finish loading before adding quiz interactivity
document.addEventListener('DOMContentLoaded', function() {
  let answerButtons = document.getElementsByClassName('quiz-answer'); 

  for (let answerButton of answerButtons) {
      answerButton.addEventListener('click', radioSelect); 
  }

  let roundForms = document.getElementsByTagName('form'); 

  for (let roundForm of roundForms) {
    roundForm.addEventListener('submit', handleSubmit); 
  }
})

/**
 * The function called when the user clicks an answer 'button' 
 * (div containing input and label elements) so that clicking 
 * anywhere in the div selects the radio button rather than the 
 * user having to specifically click the radio button or the label 
 * text to select the quiz answer
 */
 function radioSelect(event) {
  let radioButton = this.children[0]; 

  radioButton.click(); 
}

function handleSubmit(event) {
  let formSubmitted = this; 

  disableSubmit(event, formSubmitted); 
  getUserAnswers(event, formSubmitted);
  provideFeedback(event, formSubmitted);
}

function disableSubmit(event, formSubmitted) {
  event.preventDefault(); 

  let submitButton = formSubmitted.getElementsByTagName('button')[0];
  submitButton.classList.add('submitted-button');  
  submitButton.innerHTML = 'Submitted!'; 
  submitButton.disabled = true;    

  let roundAnswers =  formSubmitted.getElementsByTagName('input');

  for (let answer in roundAnswers) {
    roundAnswers[answer].disabled = true; 
  }
}

function getUserAnswers(event, formSubmitted) { 
  // question 1 answers
  let qu1Answers = formSubmitted.getElementsByClassName('q1-answer');  
  let qu1AnswerLabels = formSubmitted.getElementsByClassName('q1-answer-label'); 

  let userQu1Answer; 

  for (let qu1Answer of qu1Answers) {
    if (qu1Answer.checked) {
      userQu1Answer = qu1Answer; 
    }
  }

  let userQu1Id = userQu1Answer.id; 
  let userQu1AnswerHtml; 
  
  for (let qu1AnswerLabel of qu1AnswerLabels) {
    if (qu1AnswerLabel.getAttribute('for') === userQu1Id) {
      userQu1AnswerHtml = qu1AnswerLabel.innerHTML; 
    }
  } 

  // question 2 answers
  let qu2Answers = formSubmitted.getElementsByClassName('q2-answer');  
  let qu2AnswerLabels = formSubmitted.getElementsByClassName('q2-answer-label'); 

  let userQu2Answer; 

  for (let qu2Answer of qu2Answers) {
    if (qu2Answer.checked) {
      userQu2Answer = qu2Answer; 
    }
  }

  let userQu2Id = userQu2Answer.id; 
  let userQu2AnswerHtml; 
  
  for (let qu2AnswerLabel of qu2AnswerLabels) {
    if (qu2AnswerLabel.getAttribute('for') === userQu2Id) {
      userQu2AnswerHtml = qu2AnswerLabel.innerHTML; 
    }
  }  

  // question 3 answers
  let qu3Answers = formSubmitted.getElementsByClassName('q3-answer');  
  let qu3AnswerLabels = formSubmitted.getElementsByClassName('q3-answer-label'); 

  let userQu3Answer; 

  for (let qu3Answer of qu3Answers) {
    if (qu3Answer.checked) {
      userQu3Answer = qu3Answer; 
    }
  }

  let userQu3Id = userQu3Answer.id; 
  let userQu3AnswerHtml; 
  
  for (let qu3AnswerLabel of qu3AnswerLabels) {
    if (qu3AnswerLabel.getAttribute('for') === userQu3Id) {
      userQu3AnswerHtml = qu3AnswerLabel.innerHTML; 
    }
  } 

  let userRoundAnswers = [userQu1AnswerHtml, userQu2AnswerHtml, userQu3AnswerHtml]; 
  
  checkUserAnswers(event, formSubmitted, userRoundAnswers);
}

function checkUserAnswers(event, formSubmitted, userRoundAnswers) {
  let roundNumber = formSubmitted.getElementsByClassName('round-number')[0].innerHTML[6];

  let userQu1Score; 
  let userQu2Score; 
  let userQu3Score; 
  
  if (userRoundAnswers[0] === quiz1[roundNumber-1].questionOneCorrect) {
    userQu1Score = 1;
  } else {
    userQu1Score = 0; 
  }
  if (userRoundAnswers[1] === quiz1[roundNumber-1].questionTwoCorrect) {
    userQu2Score = 1;
  } else {
    userQu2Score = 0; 
  }
  if (userRoundAnswers[2] === quiz1[roundNumber-1].questionThreeCorrect) {
    userQu3Score = 1;
  } else {
    userQu3Score = 0; 
  }

  let userRoundScores = ['Round' + roundNumber, userQu1Score, userQu2Score, userQu3Score]; 

  provideQuResult(event, userRoundScores, formSubmitted);  
  compileUserScores(event, userRoundScores); 
}

function provideFeedback(event, formSubmitted) { 
  let roundNumber = formSubmitted.getElementsByClassName('round-number')[0].innerHTML[6];
  
  // feedback for question 1 answers
  let qu1AnswerLabels = formSubmitted.getElementsByClassName('q1-answer-label'); 
  let q1Feedback = formSubmitted.getElementsByClassName('q1-feedback'); 

  for (let i = 0; i < qu1AnswerLabels.length; i++) {
    if (qu1AnswerLabels[i].innerHTML === quiz1[roundNumber-1].questionOneCorrect) {
      q1Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q1Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    }
  }   
 
  // feedback for question 2 answers
  let qu2AnswerLabels = formSubmitted.getElementsByClassName('q2-answer-label'); 
  let q2Feedback = formSubmitted.getElementsByClassName('q2-feedback'); 
 
  for (let i = 0; i < qu2AnswerLabels.length; i++) {
    if (qu2AnswerLabels[i].innerHTML === quiz1[roundNumber-1].questionTwoCorrect) {
      q2Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q2Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    } 
  }  

  // feedback for question 3 answers
  let qu3AnswerLabels = formSubmitted.getElementsByClassName('q3-answer-label'); 
  let q3Feedback = formSubmitted.getElementsByClassName('q3-feedback'); 

  for (let i = 0; i < qu3AnswerLabels.length; i++) {
    if (qu3AnswerLabels[i].innerHTML === quiz1[roundNumber-1].questionThreeCorrect) {
      q3Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q3Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    } 
  }  
} 

function provideQuResult(event, userRoundScores, formSubmitted) {
  let q1Result = formSubmitted.getElementsByClassName('q1-result')[0];
  let q2Result = formSubmitted.getElementsByClassName('q2-result')[0];
  let q3Result = formSubmitted.getElementsByClassName('q3-result')[0];

  let roundResults = [q1Result, q2Result, q3Result]; 
  userRoundScores.shift(); 
  console.log(userRoundScores); 
  
  for (let i = 0; i < userRoundScores.length; i++) {
    if (userRoundScores[i] === 1) {
      roundResults[i].innerHTML = 'Correct!'; 
      roundResults[i].classList.add('correct-answer');
    } else {
      roundResults[i].innerHTML = 'Incorrect!'; 
      roundResults[i].classList.add('incorrect-answer');
    }
  }
}

function compileUserScores(event, userRoundScores) { 
}
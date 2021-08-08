const quiz1 = [
  {
    questions: [
      'Which movie is this quote from?',
      'Which movie is this quote from?',
      'Which movie is this quote from?'
    ],
    quotes: [
      '"If you build it, he will come"', 
      '"Hasta la vista, baby"',
      '"If you\'re a bird, I\'m a bird"'
    ],
    answers: [
      ['Gladiator', 'Field of Dreams', 'Titanic', 'Fast and the Furious'],
      ['The Terminator', 'Terminator 2: Judgment Day', 'Terminator 3: Rise of the Machines', 'Terminator Salvation'],
      ['Pride and Prejudice', 'Love Actually', 'The Notebook', 'P.S. I Love You']
    ],
    images: [
      'assets/images/quiz-page/round-one-images/central-cinema.jpeg', 
      'assets/images/quiz-page/round-one-images/clapperboard-popcorn.jpeg',
      'assets/images/quiz-page/round-one-images/cinemagoers.jpeg'
    ],     
    imageAlts: [
      'Cinema entrance in pink lighting with red neon sign saying Central Cinema', 
      'Film clapperboard with popcorn between the clapper sticks against a yellow background', 
      'Male and female cinemagoers watching a movie in a cinema with popcorn and drinks'
    ],
    correctAnswers: ['Field of Dreams', 'Terminator 2: Judgment Day', 'The Notebook']
  }, 
  {
    questions: [
      'What is the collective name for a group of cows?', 
      'Roughly how much DNA do humans share with chimpanzees?', 
      'How many hearts does an octopus have?'
    ],
    answers: [
      ['A pack', 'A herd', 'A murder', 'A school'],
      ['95%', '79%', '50%', '98%'],
      ['3', '2', '5', '1']
    ],
    images: [
      'assets/images/quiz-page/round-two-images/cows.jpeg',
      'assets/images/quiz-page/round-two-images/chimpanzee.jpeg',
      'assets/images/quiz-page/round-two-images/octopus.jpeg'
    ],  
    imageAlt: [
      'Group of cows in a field looking into the camera',
      'A chimpanzee surrounded by leaves looking into the camera', 
      'A blue ringed octopus against a black backdrop'
    ], 
    correctAnswers: ['A murder', '98%', '3'] 
  }, 
  {
    questions: [
      'The song "Don\'t You Forget About Me" by Simple Minds features in which of the following films?', 
      'In terms of sales, who are the best selling boyband of all time?', 
      'Which of these songs does not feature in the movie Wayne\'s World?'
    ], 
    answers: [
      ['Weird Science', 'The Breakfast Club', 'Sixteen Candles', 'The Sure Thing'], 
      ['Backstreet Boys', 'One Direction', 'Take That', 'Boyzone'], 
      ['Bohemian Rhapsody by Queen', 'Dream Weaver by Gary Wright', 'Foxy Lady by Jimi Hendrix', 'Back in the Saddle by Aerosmith']
    ], 
    images: [
      'assets/images/quiz-page/round-three-images/radio.jpeg', 
      'assets/images/quiz-page/round-three-images/headphones.jpeg', 
      'assets/images/quiz-page/round-three-images/lead-singer.jpeg'
    ], 
    imageAlt: [
      'Female lying down with her right foot leaning on top of a radio', 
      'Pair of black headphones against a yellow background', 
      'Lead singer of a band performing with arm outstretched against a smoky background'
    ], 
    correctAnswers: ['The Breakfast Club', 'Backstreet Boys', 'Back in the Saddle by Aerosmith']
  }, 
  {
    questions: [
      'True or False: pirates wore eye patches to have one eye adjusted for the top deck and the other adjusted for the darkness when going below deck', 
      'True or False: no bird can fly backwards',
      'True or False: newborns don\'t shed tears'
    ], 
    images: [
      'assets/images/quiz-page/round-four-images/pirate-ship.jpeg',
      'assets/images/quiz-page/round-four-images/hummingbird.jpeg',
      'assets/images/quiz-page/round-four-images/baby.jpeg'
    ], 
    imageAlt: [
      'Pirate ship on the sea at sunset', 
      'Hummingbird in flight against a background of blurred pink flowers',
      'Newborn baby\'s feet'
    ], 
    correctAnswers: ['True', 'False', 'True']
  }, 
  {
    questions: [
      'Is a catfish a fish?',
      'Is a cuttlefish a fish?',
      'Is a jellyfish a fish?'
    ], 
    images: [
      'assets/images/quiz-page/round-five-images/catfish.jpeg',
      'assets/images/quiz-page/round-five-images/cuttlefish.jpeg', 
      'assets/images/quiz-page/round-five-images/jellyfish.jpeg'
    ], 
    imageAlt: [
      'Catfish on the sea bed',
      'A cuttlefish swimming',
      'Jellyfish swimming against a blue background'
    ], 
    correctAnswers: ['Fish', 'Not a Fish', 'Not a Fish']
  }
]; 

const quiz2 = [
  {
    questions: [
      'Which movie is this quote from?',
      'Which movie is this quote from?',
      'Which movie is this quote from?'
    ],
    quotes: [
      '"Exercise gives you endorphins. Endorphins make you happy. Happy people just don\'t shoot their husbands, they just don\t."',
      '"Hope is a good thing, maybe the best of things, and no good thing ever dies."', 
      '"She doesn\'t even go here."'
    ],
    answers: [
      ['Legally Blonde', 'Girls Trip', 'Bring it On', 'Thelma and Louise'],
      ['Papillon', 'The Green Mile', 'The Shawshank Redemption', 'Forrest Gump'],
      ['Never Been Kissed', 'She\'s All That', 'American Pie', 'Mean Girls']
    ],
    images: [
      'assets/images/quiz-page/round-one-images/hollywood.jpeg',
      'assets/images/quiz-page/round-one-images/popcorn.jpeg',
      'assets/images/quiz-page/round-one-images/colosseum-cinema.jpeg'
    ],     
    imageAlts: [
      'The Hollywood sign in Los Angeles, California',
      'Red and white striped cones of popcorn in rows',
      'A cinema called the Colosseum at night with neon green signage'
    ],
    correctAnswers: ['Legally Blonde', 'The Shawshank Redemption', 'Mean Girls']
  }, 
  {
    questions: [
      'What sea creature is a blue whale\'s favourite meal?',
      'How many wolves did the largest recorded pack have?',
      'Which mammal has the most powerful bite in the world?'
    ],
    answers: [
      ['Plankton', 'Krill', 'Fish', 'Shrimp'],
      ['50', '100', '300', '400'],
      ['Hippopotamus', 'Rhinoceros', 'Grizzly Bear', 'Gorilla']
    ],
    images: [
      'assets/images/quiz-page/round-two-images/whale-tail.jpeg',
      'assets/images/quiz-page/round-two-images/wolves.jpeg',
      'assets/images/quiz-page/round-two-images/lion.jpeg'
    ],     
    imageAlts: [
      'Whale diving into the ocean with only its tail above the water',
      'A pack of wolves in the snow',
      'A lion with its mouth wide open'
    ],
    correctAnswers: ['Krill', '400', 'Hippopotamus']
  }, 
  {
    questions: [
      'The song "Kiss from a Rose" by Seal features in which of the following films?',
      'Katy Perry\'s first big hit "I Kissed a Girl" came out in what year?',
      'Who disrupted Michael Jackson\'s performance of Earth Song at the 1996 Brit Awards by mooning on stage?'
    ],
    answers: [
      ['Batman', 'Batman Returns', 'Batman Forever', 'The Dark Knight'],
      ['2008', '2009', '2010', '2011'],
      ['Liam Gallagher', 'Robbie Williams', 'Jarvis Cocker', 'Damon Albarn']
    ],
    images: [
      'assets/images/quiz-page/round-three-images/rose.jpeg', 
      'assets/images/quiz-page/round-three-images/music-listening.jpeg',
      'assets/images/quiz-page/round-three-images/concert.jpeg'
    ],     
    imageAlts: [
      'Single red rose against a white background',
      'Female listening to music on white headphones against a yellow background',
      'Music concert with yellow lights and fans with their hands in the air'
    ],
    correctAnswers: ['Batman Forever', '2008', 'Jarvis Cocker']
  }, 
  {
    questions: [
      'True or False: 20% of NBA players are broke within 5 years of retiring from the game',
      'True or False: every cigarette you smoke reduces your expected lifespan by up to 11 minutes',
      'True or False: only 2% of the world\'s population has green eyes'
    ],
    images: [
      'assets/images/quiz-page/round-four-images/basketball.jpeg',
      'assets/images/quiz-page/round-four-images/cigarette.jpeg',
      'assets/images/quiz-page/round-four-images/gree-eyes.jpeg'
    ],     
    imageAlts: [
      'Basketball coming out of the bottom of a net',
      'Cigarette burning on a ledge',
      'Female with green eyes covering her nose and mouth with a scarf'
    ],
    correctAnswers: ['False', 'True', 'True']
  }, 
  {
    questions: [
      'Is a lionfish a fish?',
      'Are shellfish fish?',
      'Is a crayfish a fish?'
    ],
    images: [
      'assets/images/quiz-page/round-five-images/lionfish.jpeg',
      'assets/images/quiz-page/round-five-images/mussels.jpeg',
      'assets/images/quiz-page/round-five-images/crayfish.jpeg'
    ],     
    imageAlts: [
      'Lionfish swimming in blue water',
      'A large number of closed mussels',
      'A single red crayfish in water'
    ],
    correctAnswers: ['Fish', 'Not a Fish', 'Not a Fish' ]
  }
]; 

const quiz3 = [
  {
    questions: [
    ],
    quotes: [
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }
]; 

const quiz4 = [
  {
    questions: [
    ],
    quotes: [
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }
]; 

const quiz5 = [
  {
    questions: [
    ],
    quotes: [
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }, 
  {
    questions: [
      
    ],
    quotes: [
      
    ],
    answers: [
      [],
      [],
      []
    ],
    images: [
      
    ],     
    imageAlts: [
     
    ],
    correctAnswers: []
  }
]; 
    
const allRoundScores = []; 

// Wait for the DOM to finish loading before adding quiz interactivity
document.addEventListener('DOMContentLoaded', function() {
  let answerButtons = document.getElementsByClassName('quiz-answer'); 

  for (let answerButton of answerButtons) {
      answerButton.addEventListener('click', radioSelect); 
  }

  let roundForms = document.getElementsByClassName('round-container'); 

  for (let roundForm of roundForms) {
    roundForm.addEventListener('submit', handleSubmit); 
  }

  document.getElementById('results-button').parentNode.addEventListener('submit', handleResults);
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
  disableSubmit(event); 
  provideFeedback(event);
  compileUserScores(event); 
}

function disableSubmit(event) {
  event.preventDefault(); 

  let submitButton = event.target.getElementsByTagName('button')[0];
  submitButton.classList.add('submitted-button');  
  submitButton.innerHTML = 'Submitted!'; 
  submitButton.disabled = true;    

  let roundAnswers =  event.target.getElementsByTagName('input');

  for (let answer in roundAnswers) {
    roundAnswers[answer].disabled = true; 
  }
}

function provideFeedback(event) { 
  let roundNumber = event.target.getElementsByClassName('round-number')[0].innerHTML[6];
  
  // feedback for question 1 answers
  let qu1AnswerLabels = event.target.getElementsByClassName('q1-answer-label'); 
  let q1Feedback = event.target.getElementsByClassName('q1-feedback'); 

  for (let i = 0; i < qu1AnswerLabels.length; i++) {
    if (qu1AnswerLabels[i].innerHTML === quiz1[roundNumber-1].correctAnswers[0]) {
      q1Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q1Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    }
  }   
 
  // feedback for question 2 answers
  let qu2AnswerLabels = event.target.getElementsByClassName('q2-answer-label'); 
  let q2Feedback = event.target.getElementsByClassName('q2-feedback'); 
 
  for (let i = 0; i < qu2AnswerLabels.length; i++) {
    if (qu2AnswerLabels[i].innerHTML === quiz1[roundNumber-1].correctAnswers[1]) {
      q2Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q2Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    } 
  }  

  // feedback for question 3 answers
  let qu3AnswerLabels = event.target.getElementsByClassName('q3-answer-label'); 
  let q3Feedback = event.target.getElementsByClassName('q3-feedback'); 

  for (let i = 0; i < qu3AnswerLabels.length; i++) {
    if (qu3AnswerLabels[i].innerHTML === quiz1[roundNumber-1].correctAnswers[2]) {
      q3Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q3Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    } 
  }  
} 

function compileUserScores(event) { 
  let overallRoundScore = provideQuResult(event); 

  allRoundScores.push(overallRoundScore);  
}

function provideQuResult(event) {
  let userRoundScores = checkUserAnswers(event); 

  let q1Result = event.target.getElementsByClassName('q1-result')[0];
  let q2Result = event.target.getElementsByClassName('q2-result')[0];
  let q3Result = event.target.getElementsByClassName('q3-result')[0];

  let roundResults = [q1Result, q2Result, q3Result]; 
  let roundScores = [userRoundScores[1], userRoundScores[2], userRoundScores[3]];
  
  for (let i = 0; i < roundScores.length; i++) {
    if (roundScores[i] === 1) {
      roundResults[i].innerHTML = 'Correct!'; 
      roundResults[i].classList.add('correct-answer');
    } else {
      roundResults[i].innerHTML = 'Incorrect!'; 
      roundResults[i].classList.add('incorrect-answer');
    }
  }

  let overallRoundScore = [userRoundScores[0], (userRoundScores[1] + userRoundScores[2] + userRoundScores[3])];

  return overallRoundScore; 
}

function checkUserAnswers(event) {
  let userRoundAnswers = getUserAnswers(event); 
  let roundNumber = event.target.getElementsByClassName('round-number')[0].innerHTML[6];

  let userQu1Score; 
  let userQu2Score; 
  let userQu3Score; 
  
  if (userRoundAnswers[0] === quiz1[roundNumber-1].correctAnswers[0]) {
    userQu1Score = 1;
  } else {
    userQu1Score = 0; 
  }
  if (userRoundAnswers[1] === quiz1[roundNumber-1].correctAnswers[1]) {
    userQu2Score = 1;
  } else {
    userQu2Score = 0; 
  }
  if (userRoundAnswers[2] === quiz1[roundNumber-1].correctAnswers[2]) {
    userQu3Score = 1;
  } else {
    userQu3Score = 0; 
  }

  let userRoundScores = ['Round' + roundNumber, userQu1Score, userQu2Score, userQu3Score]; 

  return userRoundScores;  
}

function getUserAnswers(event) { 
  // question 1 answers
  let qu1Answers = event.target.getElementsByClassName('q1-answer');  
  let qu1AnswerLabels = event.target.getElementsByClassName('q1-answer-label'); 

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
  let qu2Answers = event.target.getElementsByClassName('q2-answer');  
  let qu2AnswerLabels = event.target.getElementsByClassName('q2-answer-label'); 

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
  let qu3Answers = event.target.getElementsByClassName('q3-answer');  
  let qu3AnswerLabels = event.target.getElementsByClassName('q3-answer-label'); 

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
  
  return userRoundAnswers; 
}

function handleResults(event) {
  event.preventDefault();

  if (allRoundScores.length === 5) {
    allRoundScores.sort(); 
    sessionStorage.setItem('allRoundScores', JSON.stringify(allRoundScores)); 
    event.target.submit();  
  } else {
    alert('Please submit all 5 rounds to get your results'); 
  }
}
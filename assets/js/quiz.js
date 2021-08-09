const quiz1 = [
  {
    questions: [
      'Which movie is this quote from?',
      'Which movie is this quote from?',
      'Which movie is this quote from?'
    ],
    quotes: [
      '"If you build it, he will come."', 
      '"Hasta la vista, baby."',
      '"If you\'re a bird, I\'m a bird."'
    ],
    answers: [
      'Gladiator', 'Field of Dreams', 'Titanic', 'Fast and the Furious',
      'The Terminator', 'Terminator 2: Judgment Day', 'Terminator 3: Rise of the Machines', 'Terminator Salvation',
      'Pride and Prejudice', 'Love Actually', 'The Notebook', 'P.S. I Love You'
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
      'A pack', 'A herd', 'A murder', 'A school',
      '95%', '79%', '50%', '98%',
      '3', '2', '5', '1'
    ],
    images: [
      'assets/images/quiz-page/round-two-images/cows.jpeg',
      'assets/images/quiz-page/round-two-images/chimpanzee.jpeg',
      'assets/images/quiz-page/round-two-images/octopus.jpeg'
    ],  
    imageAlts: [
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
      'Weird Science', 'The Breakfast Club', 'Sixteen Candles', 'The Sure Thing', 
      'Backstreet Boys', 'One Direction', 'Take That', 'Boyzone', 
      'Bohemian Rhapsody by Queen', 'Dream Weaver by Gary Wright', 'Foxy Lady by Jimi Hendrix', 'Back in the Saddle by Aerosmith'
    ], 
    images: [
      'assets/images/quiz-page/round-three-images/radio.jpeg', 
      'assets/images/quiz-page/round-three-images/headphones.jpeg', 
      'assets/images/quiz-page/round-three-images/lead-singer.jpeg'
    ], 
    imageAlts: [
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
    imageAlts: [
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
    imageAlts: [
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
      'Legally Blonde', 'Girls Trip', 'Bring it On', 'Thelma and Louise',
      'Papillon', 'The Green Mile', 'The Shawshank Redemption', 'Forrest Gump',
      'Never Been Kissed', 'She\'s All That', 'American Pie', 'Mean Girls'
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
      'Plankton', 'Krill', 'Fish', 'Shrimp',
      '50', '100', '300', '400',
      'Hippopotamus', 'Rhinoceros', 'Grizzly Bear', 'Gorilla'
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
      'Batman', 'Batman Returns', 'Batman Forever', 'The Dark Knight',
      '2008', '2009', '2010', '2011',
      'Liam Gallagher', 'Robbie Williams', 'Jarvis Cocker', 'Damon Albarn'
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
      'assets/images/quiz-page/round-four-images/green-eyes.jpeg'
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
      'Which movie is this quote from?',
      'Which movie is this quote from?',
      'Which movie is this quote from?'
    ],
    quotes: [
      '"Hey has anyone seen the captain\'s balls? Let me know. They\'re about this big. They\'re like really, really tiny little girl balls, if little girls had balls"',
      '"Stove, what kind of name is that? That\'s not my name, my name is Steve. Are you an appliance? No I\'m a man."',
      '"Hello Katerina. Make anyone cry today? Sadly no, but it\'s only 4:30."'
    ],
    answers: [
      'Hot Pursuit', 'The Heat', 'Bad Boys', 'Lethal Weapon',
      'Men in Black', 'Bridesmaids', 'As Good as it Gets', 'Knocked Up',
      'Clueless', 'Mean Girls', '10 Things I Hate About You', 'Miss Congeniality'
    ],
    images: [
      'assets/images/quiz-page/round-one-images/outdoor-cinema.jpeg',
      'assets/images/quiz-page/round-one-images/hollywood-clapperboard.jpeg',
      'assets/images/quiz-page/round-one-images/red-film-reel.jpeg'
    ],     
    imageAlts: [
      'Oudoor cinema on a beach with deckchairs',
      'Black and white film clapperboard with Hollywood written on it',
      'Film reel with unwound red film'
    ],
    correctAnswers: ['The Heat', 'Bridesmaids', '10 Things I Hate About You']
  }, 
  {
    questions: [
      'A human produces enough saliva per year to fill how many bath tubs?',
      'What percentage of people dream in black and white?',
      'What percentage of sloths die when they go to the ground to poop once a week?'
    ],
    answers: [
      '1/2', '1', '2', '3',
      '1%', '5%', '12%', '20%',
      '20%', '50%', '80%', '90%'
    ],
    images: [
      'assets/images/quiz-page/round-two-images/lips.jpeg',
      'assets/images/quiz-page/round-two-images/dream.jpeg',
      'assets/images/quiz-page/round-two-images/sloth.jpeg' 
    ],     
    imageAlts: [
      'Female with red lipstick and pink sprinkles on her lips licking her teeth',
      'Torn piece of white paper with dream handwritten on it amongst purple glitter',
      'Sloth hanging from the underside of a tree branch'
    ],
    correctAnswers: ['2', '12%', '50%']
  }, 
  {
    questions: [
      'The song "Heathens" by Twenty One Pilots features in which of hte following films?',
      'Who does Guinness World Records rank as the best-selling female recording artist of all time?',
      'The 2001 debut album of Alicia Keys was called "Songs in..." what?'
    ],
    answers: [
      'Birds of Prey', 'Suicide Squad', 'Venom', 'Green Lantern',
      'Madonna', 'Whitney Houston', 'Beyonce', 'Rihanna',
      'B Flat Minor', 'C Minor', 'A Minor', 'D Major'
    ],
    images: [
      'assets/images/quiz-page/round-three-images/cassette-tape.jpeg',
      'assets/images/quiz-page/round-three-images/microphone.jpeg',
      'assets/images/quiz-page/round-three-images/neon-sign.jpeg'
    ],     
    imageAlts: [
      'White cassette tape with its brown tape unwound against an orange background',
      'Vintage silver microphone against a blurry background of lights',
      'Neon sign on a brick wall saying "You are what you listen to"'
    ],
    correctAnswers: ['Suicide Squad', 'Madonna', 'A Minor']
  }, 
  {
    questions: [
      'True or False: a platypus does not have a stomach',
      'True or False: armadillos are not bulletproof',
      'True or False: sometimes when they are gathering nectar, bees will fall asleep in flowers'
    ],
    images: [
      'assets/images/quiz-page/round-four-images/platypus.jpeg',
      'assets/images/quiz-page/round-four-images/armadillo.jpeg',
      'assets/images/quiz-page/round-four-images/bee.jpeg'
    ],     
    imageAlts: [
      'Platypus partly above and partly below the waterline in a tank',
      'Armadillo in the grass',
      'Bee in a purple flower'
    ],
    correctAnswers: ['True', 'False', 'True']
  }, 
  {
    questions: [
      'Is a stonefish a fish?',
      'Is a manta ray a fish?',
      'Is a starfish a fish?'
    ],
    images: [
      'assets/images/quiz-page/round-five-images/stonefish.jpeg',
      'assets/images/quiz-page/round-five-images/manta-ray.jpeg',
      'assets/images/quiz-page/round-five-images/starfish.jpeg'
    ],     
    imageAlts: [
      'Swimming stonefish against a blurry rocky background',
      'Swimming manta ray against a blue ocean backdrop',
      'Orange starfish on the sand next to an incoming foam wave'
    ],
    correctAnswers: ['Fish', 'Fish', 'Not a Fish']
  }
]; 

const quiz4 = [
  {
    questions: [
      'Which movie is this quote from?',
      'Which movie is this quote from?',
      'Which movie is this quote from?'
    ],
    quotes: [
      '"Call me Kat. Call me Kitty Kat".',
      '"What we do in life echoes in eternity".',
      '"Sixty per cent of the time it works every time."'
    ],
    answers: [
      'The Aristocats', 'Wedding Crashers', 'Cats', 'American Pie',
      'Troy', 'Spartacus', 'Braveheart', 'Gladiator',
      'Anchorman', 'Anchorman 2', 'The Dukes of Hazzard', 'Talladega Nights'
    ],
    images: [
      'assets/images/quiz-page/round-one-images/cinema-gate.jpeg', 
      'assets/images/quiz-page/round-one-images/black-film-reel.jpeg',
      'assets/images/quiz-page/round-one-images/netflix.jpeg'
    ],     
    imageAlts: [
      'Gold cinema sign crafted into black ironwork with a blurry garden behind',
      'Unwound black film against a white background',
      'Computer screen showing the red Netflix sign'
    ],
    correctAnswers: ['Wedding Crashers', 'Gladiator', 'Anchorman']
  }, 
  {
    questions: [
      'How many active volcanoes are there in the world?',
      'What is a turkey called in Vietnam?',
      'What is a baby echidna called?'
    ],
    answers: [
      '200', '500', '1000', '1500',
      'Dutch Chicken', 'Western Chicken', 'India', 'Peru',
      'A puggle', 'A pup', 'A hatchling', 'A cub'
    ],
    images: [
      'assets/images/quiz-page/round-two-images/volcano.jpeg',
      'assets/images/quiz-page/round-two-images/turkey.jpeg',
      'assets/images/quiz-page/round-two-images/echidna.jpeg'
    ],     
    imageAlts: [
      'A volcano erupting',
      'A turkey in the grass',
      'An echidna in the grass'
    ],
    correctAnswers: ['1500', 'Western Chicken', 'A puggle']
  }, 
  {
    questions: [
      'The song "The Power of Love" by Huey Lewis & the News features in which of the following films?',
      'Keith Richards of the Rolling Stones infamously didn\'t sleep for how many days?',
      'Maroon 5\'s debut album was called "Songs About..." who?'
    ],
    answers: [
      'Back to the Future Part 3', 'Mannequin', 'Blue Hawaii', 'Back to the Future',
      '3', '7', '9', '12',
      'Lucy', 'Jane', 'Alice', 'Beth'
    ],
    images: [
      'assets/images/quiz-page/round-three-images/music-icon.jpeg',
      'assets/images/quiz-page/round-three-images/guitar-on-fire.jpeg',
      'assets/images/quiz-page/round-three-images/phone-playing-music.jpeg'
    ],     
    imageAlts: [
      'Red Apple music icon on a 3D black button',
      'Guitar engulfed in orange and yellow flames',
      'White headphones and iPhone playing music amongst a variety of turquoise items'
    ],
    correctAnswers: ['Back to the Future', '9', 'Jane']
  }, 
  {
    questions: [
      'True or False: you sleep deeper on a hammock than on a bed.',
      'True or False: Pablo Escobar, the notorious drug lord, spent roughly $2,500 a month on plastic bands for his money.',
      'True or False: meditation does not alter the brain\'s structure.'
    ],
    images: [
      'assets/images/quiz-page/round-four-images/hammock.jpeg',
      'assets/images/quiz-page/round-four-images/money.jpeg', 
      'assets/images/quiz-page/round-four-images/meditation.jpeg'
    ],     
    imageAlts: [
      'Hammock hanging between two trees on a beach against a sunset backdrop',
      'Rolls of money secured with elastic bands', 
      'Female meditating sat on grass'
    ],
    correctAnswers: ['True', 'True', 'False']
  }, 
  {
    questions: [
      'Is a seahorse a fish?',
      'Is a sea urchin a fish?', 
      'Is a sea snake a fish?'
    ],
    images: [
      'assets/images/quiz-page/round-five-images/seahorse.jpeg', 
      'assets/images/quiz-page/round-five-images/sea-urchin.jpeg',
      'assets/images/quiz-page/round-five-images/sea-snake.jpeg'
    ],     
    imageAlts: [
      'Yellow seahorse against a blue ocean backdrop',
      'Purple spiky sea urchin on a rock',
      'Black and white striped sea snake swimming in a turquoise ocean'
    ],
    correctAnswers: ['Fish', 'Not a Fish', 'Not a Fish']
  }
]; 

const quiz5 = [
  {
    questions: [
      'Which movie is this quote from?',
      'Which movie is this quote from?',
      'Which movie is this quote from?'
    ],
    quotes: [
      '"It\'s not a man purse. It\'s called a satchel. Indiana Jones wears one."',
      '"Frankly, my dear, I don\'t give a damn."',
      '"Spit spot!"'
    ],
    answers: [
      'The Hangover', 'Road Trip', 'Jumanji', 'Deadpool',
      'Casablanca', 'Gone With the Wind', 'Breakfast at Tiffany\'s', 'Some Like it Hot',
      'The Sound of Music', 'Nanny McPhee', 'The Devil Wears Prada', 'Mary Poppins'
    ],
    images: [
      'assets/images/quiz-page/round-one-images/full-cinema.jpeg',
      'assets/images/quiz-page/round-one-images/movie-ticket.jpeg',
      'assets/images/quiz-page/round-one-images/walk-of-fame.jpeg'
    ],     
    imageAlts: [
      'People sat in red cinema chairs watching a film',
      'Two film tickets on top of a bowl of popcorn',
      'Alfred Hitchcock\'s star on the Hollywood Walk of Fame'
    ],
    correctAnswers: ['The Hangover', 'Gone With the Wind', 'Mary Poppins']
  }, 
  {
    questions: [
      'Research has shown that dogs have individual music preferences. Which music genre is a firm favourite in the canine world?',
      'What is a group of lemurs called?',
      'What percentage of lightning stike victims survive?'
    ],
    answers: [
      'Pop', 'Reggae', 'Rock', 'Country',
      'A pack', 'A colony', 'A conspiracy', 'A gang',
      '1%', '10%', '50%', '90%'
    ],
    images: [
      'assets/images/quiz-page/round-two-images/dogs.jpeg',
      'assets/images/quiz-page/round-two-images/lemurs.jpeg',
      'assets/images/quiz-page/round-two-images/lightning.jpeg'
    ],     
    imageAlts: [
      'Two dogs wearing brightly coloured jackets, one wearing a big gold chain',
      'A group of ring-tailed lemurs huddled together on a wooden platform',
      'A lightning bolt striking a city below at night'
    ],
    correctAnswers: ['Reggae', 'A conspiracy', '90%']
  }, 
  {
    questions: [
      'The song "Kiss Me" by Sixpence None the Richer features in which of the following films?',
      'Which of the following artists has not sung a Bond theme song?',
      'How old was Britney Spears when her debut song "Baby One More Time" came out in 1998?'
    ],
    answers: [
      'Clueless', 'She\'s All That', 'American Pie', '10 Things I Hate About You',
      'Tina Turner', 'Sheryl Crow', 'Whitney Houston', 'Madonna',
      '16', '17', '18', '19'
    ],
    images: [
      'assets/images/quiz-page/round-three-images/guitars.jpeg',
      'assets/images/quiz-page/round-three-images/record.jpeg',
      'assets/images/quiz-page/round-three-images/dj-decks.jpeg'
    ],     
    imageAlts: [
      'Electric guitars hanging from the ceiling by wires together with neon signs saying "Yeah"',
      'Black and red vinyl record playing on a record player',
      'DJ decks with pink neon lights in a dark room'
    ],
    correctAnswers: ['She\'s All That', 'Whitney Houston', '17']
  }, 
  {
    questions: [
      'True or False: spicy is a taste.',
      'True or False: rabbits can smell their dead relatives in the faeces of predators.',
      'True or False: sharks are older than trees'
    ],
    images: [
      'assets/images/quiz-page/round-four-images/chilli.jpeg',
      'assets/images/quiz-page/round-four-images/white-rabbit.jpeg',
      'assets/images/quiz-page/round-four-images/shark.jpeg'
    ],     
    imageAlts: [
      'Red chillis, limes and garlic cloves spread around a bowl of orange puree',
      'White rabbit with grey ears sat in grass',
      'A great white shark swimming in the ocean'
    ],
    correctAnswers: ['False', 'True', 'True']
  }, 
  {
    questions: [
      'Is an eel a fish?', 
      'Is an octopus a fish?', 
      'Is a whale shark a fish?'
    ],
    images: [
      'assets/images/quiz-page/round-five-images/moray-eel.jpeg',
      'assets/images/quiz-page/round-five-images/octopus.jpeg',
      'assets/images/quiz-page/round-five-images/whale-shark.jpeg'
    ],     
    imageAlts: [
      'A white and yellow moray eel with black markings in water',
      'A red octopus in dark water',
      'A whale shark swimming in the ocean'
    ],
    correctAnswers: ['Fish', 'Not a Fish', 'Fish']
  }
]; 
    
const allRoundScores = []; 

const chosenQuiz = []; 

// Wait for the DOM to finish loading before adding quiz interactivity
document.addEventListener('DOMContentLoaded', function() {
  populateQuizHtml();
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

function populateQuizHtml() {
  let quizHtmlLocations = getQuizHtmlLocations(); 
  let selectedQuiz = getQuiz();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      quizHtmlLocations.questions[i][j].innerHTML += selectedQuiz[i].questions[j]; 
    }
  }

  for (let i = 0; i < 3; i++) {
    quizHtmlLocations.quotes[i].innerHTML += selectedQuiz[0].quotes[i]; 
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 12; j++) {
      quizHtmlLocations.answers[i][j].innerHTML += selectedQuiz[i].answers[j]; 
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      quizHtmlLocations.photos[i][j].setAttribute('src', selectedQuiz[i].images[j]); 
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      quizHtmlLocations.photos[i][j].setAttribute('alt', selectedQuiz[i].imageAlts[j]); 
    }
  }
}

function getQuizHtmlLocations() {
  let quizQuestions = document.getElementsByClassName('question'); 
  let quizQuotes = document.getElementsByClassName('quiz-quote'); 
  let quizAnswers = document.getElementsByTagName('label'); 
  let quizPhotos = document.getElementsByTagName('img');  

  let quizHtmlLocations = {
    questions: [
      [quizQuestions[0], quizQuestions[1], quizQuestions[2]],
      [quizQuestions[3], quizQuestions[4], quizQuestions[5]],
      [quizQuestions[6], quizQuestions[7], quizQuestions[8]],
      [quizQuestions[9], quizQuestions[10], quizQuestions[11]],
      [quizQuestions[12], quizQuestions[13], quizQuestions[14]]
      ],
    quotes: [quizQuotes[0], quizQuotes[1], quizQuotes[2]],
    answers: [
      [
        quizAnswers[0], quizAnswers[1], quizAnswers[2], quizAnswers[3],
        quizAnswers[4], quizAnswers[5], quizAnswers[6], quizAnswers[7],
        quizAnswers[8], quizAnswers[9], quizAnswers[10], quizAnswers[11]
      ],
      [
        quizAnswers[12], quizAnswers[13], quizAnswers[14], quizAnswers[15],
        quizAnswers[16], quizAnswers[17], quizAnswers[18], quizAnswers[19],
        quizAnswers[20], quizAnswers[21], quizAnswers[22], quizAnswers[23]
      ],
      [
        quizAnswers[24], quizAnswers[25], quizAnswers[26], quizAnswers[27],
        quizAnswers[28], quizAnswers[29], quizAnswers[30], quizAnswers[31],
        quizAnswers[32], quizAnswers[33], quizAnswers[34], quizAnswers[35]
      ], 
    ],
    photos: [
      [quizPhotos[0], quizPhotos[1], quizPhotos[2]],
      [quizPhotos[3], quizPhotos[4], quizPhotos[5]],
      [quizPhotos[6], quizPhotos[7], quizPhotos[8]],
      [quizPhotos[9], quizPhotos[10], quizPhotos[11]],
      [quizPhotos[12], quizPhotos[13], quizPhotos[14]],
    ],
  };  

  return quizHtmlLocations;
}

function getQuiz() {
  let quizNumber = selectQuizNumber();

  let selectedQuiz;

  if (quizNumber === 1) {
    selectedQuiz = quiz1; 
  } else if (quizNumber === 2) {
    selectedQuiz = quiz2; 
  } else if (quizNumber === 3 ) {
    selectedQuiz = quiz3; 
  } else if (quizNumber === 4) {
    selectedQuiz = quiz4; 
  } else if (quizNumber === 5) {
    selectedQuiz = quiz5; 
  } else {
    alert('Oops, we have encountered an unknown quiz number, please refresh the page.')
    throw 'Unknown quiz number, aborting!';
  }; 

  chosenQuiz.push(selectedQuiz);

  return selectedQuiz; 
}

function selectQuizNumber() {
  let quizNumber = Math.floor(Math.random() * 5) +1; 

  return quizNumber; 
}

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
  let selectedQuiz = getQuiz(); 
  
  // feedback for question 1 answers
  let qu1AnswerLabels = event.target.getElementsByClassName('q1-answer-label'); 
  let q1Feedback = event.target.getElementsByClassName('q1-feedback'); 

  for (let i = 0; i < qu1AnswerLabels.length; i++) {
    if (qu1AnswerLabels[i].innerHTML === selectedQuiz[roundNumber-1].correctAnswers[0]) {
      q1Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q1Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    }
  }   
 
  // feedback for question 2 answers
  let qu2AnswerLabels = event.target.getElementsByClassName('q2-answer-label'); 
  let q2Feedback = event.target.getElementsByClassName('q2-feedback'); 
 
  for (let i = 0; i < qu2AnswerLabels.length; i++) {
    if (qu2AnswerLabels[i].innerHTML === selectedQuiz[roundNumber-1].correctAnswers[1]) {
      q2Feedback[i].innerHTML = ' <i class="fas fa-check right-answer"></i>';
    } else {
      q2Feedback[i].innerHTML += ' <i class="fas fa-times wrong-answer"></i>';
    } 
  }  

  // feedback for question 3 answers
  let qu3AnswerLabels = event.target.getElementsByClassName('q3-answer-label'); 
  let q3Feedback = event.target.getElementsByClassName('q3-feedback'); 

  for (let i = 0; i < qu3AnswerLabels.length; i++) {
    if (qu3AnswerLabels[i].innerHTML === selectedQuiz[roundNumber-1].correctAnswers[2]) {
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
  let selectedQuiz = getQuiz(); 

  let userQu1Score; 
  let userQu2Score; 
  let userQu3Score; 
  
  if (userRoundAnswers[0] === selectedQuiz[roundNumber-1].correctAnswers[0]) {
    userQu1Score = 1;
  } else {
    userQu1Score = 0; 
  }
  if (userRoundAnswers[1] === selectedQuiz[roundNumber-1].correctAnswers[1]) {
    userQu2Score = 1;
  } else {
    userQu2Score = 0; 
  }
  if (userRoundAnswers[2] === selectedQuiz[roundNumber-1].correctAnswers[2]) {
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
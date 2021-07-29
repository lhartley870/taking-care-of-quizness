// Wait for the DOM to finish loading before adding button interactivity
// Get the Rules and Create Username show/hide buttons and add event listeners to them
// Structure for this first event listener largely adapted from Code Institute Love Maths project
document.addEventListener('DOMContentLoaded', function() {
  let buttons = [document.getElementsByClassName('home-page-button')[0], document.getElementsByClassName('home-page-button')[1]];
  
  for (let button of buttons) {
    button.addEventListener('click', function() {
      if (this.parentNode.getAttribute('id') === 'username-container') {
        showAndHideUsernameForm();
        amendHomePgFormatting();  
      } else {
        showAndHideRules(); 
        amendHomePgFormatting(); 
      }
    })
  } 
})

/**
 * The function called on the 'Rules' button when the script is first loaded
 * allowing the user to click the 'Rules' button to display the quiz rules
 * and click the button again to hide them
 */
function showAndHideRules() {
  let rulesInnerContainer = document.getElementById('rules-container').children[1]; 
  let rules = `
    <ol>
      <li>Click on either 'Start Quiz 1' or 'Start Quiz 2' to begin</li>
      <li>There are 5 rounds per quiz and 3 questions in a round</li>
      <li>All questions are multiple choice with 1 correct answer per question</li>
      <li>Click the answers you want to submit for each round and then click the 'Submit Round' button to see how you did in that round</li>
      <li>When you have submitted your Round 5 questions, click on the 'Get My Results' button to find out your overall quiz score and stats</li>
      <li>
        <table>
          <tr>
            <th>Score</th>
            <th>You are</th>
          </tr>
          <tr class="low-score">
            <td>0-5 <i class="far fa-frown"></i></td>
            <td>Les Quizerables</td>
          </tr>
          <tr class="medium-score">
            <td>6-10 <i class="far fa-meh"></i></td>
            <td>Risky Quizness</td>
          </tr>
          <tr class="high-score">
            <td>11-15 <i class="far fa-smile"></i></td>
            <td>The Quizard of Oz</td>
          </tr>
        </table>
      </li>
      <li>Once you have completed one quiz, come back and try the other one!</li>
    </ol>
  `; 

  if (rulesInnerContainer.innerHTML === " ") {
    rulesInnerContainer.innerHTML = rules; 
  } else {
    rulesInnerContainer.innerHTML = " "; 
  }
}

function showAndHideUsernameForm() {
  console.log('show and hide username');
}

function amendHomePgFormatting() {
  console.log('amend formatting'); 
}

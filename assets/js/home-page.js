// Wait for the DOM to finish loading before adding button interactivity
// Get the Rules and Create Username buttons and add event listeners to them
// Get the Create Username form and add event listener to it
// Structure for this first event listener function largely adapted from Code Institute Love Maths project
document.addEventListener('DOMContentLoaded', function() {
  let buttons = [document.getElementsByClassName('home-page-button')[0], document.getElementsByClassName('home-page-button')[1]];
  let usernameForm = document.getElementsByTagName('form')[0]; 

  for (let button of buttons) {
    button.addEventListener('click', function() {
      if (this.parentNode.getAttribute('id') === 'username-container') {
        showAndHideUsernameForm();
      } else {
        showAndHideRules(); 
      }
    })
  } 

  usernameForm.addEventListener('submit', handleSubmit); 
})

/**
 * The function called when the user clicks the 'Rules' button allowing the user to 
 * show and hide the quiz rules (surrounded by a shadow border) 
 */
function showAndHideRules() {
  let rulesInnerContainer = document.getElementById('rules-container').children[1]; 
  let rulesHtml = `
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
  let rulesOuterContainer = document.getElementById('rules-container'); 

  if (rulesInnerContainer.innerHTML === '') {
    rulesInnerContainer.innerHTML = rulesHtml; 
    rulesOuterContainer.classList.add('show-hide-content-container');
  } else {
    rulesInnerContainer.innerHTML = ''; 
    rulesOuterContainer.classList.remove('show-hide-content-container'); 
  }
}

/**
 * The function called when the user clicks the 'Create Username' button allowing the user 
 * to show and hide the content of the form for creating a username (surrounded by a shadow border) 
 * Content shown will depend on whether or not the Create Username form has been submitted 
 * by the user 
 */
function showAndHideUsernameForm() {
  let usernameForm = document.getElementsByTagName('form')[0]; 
  
  let formHtmlPreSubmit = `
    <p>Create an optional username for the quiz!</p>
    <label for="username">Username:</label>
    <input type="text" id="username" name="user" required>
    <button type="submit" class="username-submit-button">Submit Username</button>
  `;

  let formHtmlPostSubmit = `
    <p>Create an optional username for the quiz!</p>
    <label for="username">Username:</label>
    <input type="text" id="username" name="user" required disabled>
    <button type="submit" class="username-submit-button submitted-button" disabled>Submitted!</button>
  `; 

  let usernameOuterContainer = document.getElementById('username-container');

  if (usernameForm.innerHTML === '') {
    usernameOuterContainer.classList.add('show-hide-content-container');
    if (usernameForm.hasAttribute('data-submitted')) {
      usernameForm.innerHTML = formHtmlPostSubmit;  
    } else {
      usernameForm.innerHTML = formHtmlPreSubmit; 
    } 
  } else {
    usernameForm.innerHTML = '';
    usernameOuterContainer.classList.remove('show-hide-content-container'); 
  }
}

/**
 * The function called when the user submits the form to create a username 
 * preventing the default submit behaviour, saving the username value to be used
 * to personalise the results page, changing the submit button appearance, clearing
 * the username value from the form, disabling the username input field and the
 * submit button and adding an attribute to the form element so that the 
 * showAndHideUsernameForm function can identify whether or not the form has been
 * submitted
 */
function handleSubmit(event) {
  event.preventDefault(); 

  let usernameValue = document.getElementById('username').value;
  sessionStorage.setItem("username", usernameValue);  

  let usernameInput = document.getElementById('username'); 
  usernameInput.value = ''; 
  usernameInput.disabled = true;  

  let submitButton = document.getElementsByClassName('username-submit-button')[0];   
  submitButton.classList.add('submitted-button');  
  submitButton.innerHTML = 'Submitted!'; 
  submitButton.disabled = true; 

  let usernameForm = document.getElementsByTagName('form')[0];
  usernameForm.setAttribute('data-submitted', '');
}
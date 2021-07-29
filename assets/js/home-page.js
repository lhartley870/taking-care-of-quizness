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

function showAndHideRules() {
  console.log('show and hide rules');
}

function showAndHideUsernameForm() {
  console.log('show and hide username');
}

function amendHomePgFormatting() {
  console.log('amend formatting'); 
}

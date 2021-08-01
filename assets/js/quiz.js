// Wait for the DOM to finish loading before adding quiz interactivity
document.addEventListener('DOMContentLoaded', function() {
  let answers = document.getElementsByTagName('input'); 

  for (let answer of answers) {
    answer.addEventListener('focus', answerFocus);
    answer.addEventListener('change', answerSelection);
  }
})

function answerFocus(event) {
  let answerContainer = this.parentNode; 

}

function answerSelection(event) {
  let answerContainer = this.parentNode; 

}
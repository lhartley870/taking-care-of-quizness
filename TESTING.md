# Testing

## Validators
[The W3C Markup Validation Service](https://validator.w3.org/) was used for testing the html code for the site. The following results show that no errors have been found: 
* [Home page html when Rules and username form are not displaying](/readme-documents/validation-results/home-pg-html-clear-result-no-js.png)
* [Home page html when Rules and unsubmitted username form are displaying](/readme-documents/validation-results/home-pg-html-js-pre-submit-username.png)
* [Home page html when Rules and submitted username form are displayed](/readme-documents/validation-results/home-pg-html-js-post-submit-username.png)
* [Quiz page html without dynamic html inputted by javascript](/readme-documents/validation-results/quiz-pg-html-no-js.png)
* [Quiz page html with dynamic html inputted by javascript for quiz1 when all rounds have been submitted]()
* [Results page html without dynamic html inputed by javascript](/readme-documents/validation-results/results-pg-html-no-js.png)
* [Results page html with dynamic html inputed by javascript for a high score of 11-15 with the same score in each round](/readme-documents/validation-results/)

[The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used for testing the css code for the site. With the style.css file, validation was run using direct copying and pasting of the css code which gave [this result](/readme-documents/validation-results/css-validator-warnings.png). The error was cleared by amending the grid-template-row value for #results-form-container (see the amended validator result [here](/readme-documents/validation-results/css-validator-clear.png)). However, in terms of the warning saying *'Imported style sheets are not checked in direct input and file upload modes'* this still remained upon doing the css direct input validation so I ran the style.css file validation using the URI as well which gave the following clear results:
* [style.css file](/readme-documents/validation-results/css-validator-uri.png) 
and the warning had disappeared. 

[The JSHint Validator](https://jshint.com/) was used for testing the javascript code for the site. The following results show that no errors have been found:
* [Home page javascript](/readme-documents/validation-results/home-pg-js-clear-result.png)
* [Quiz page javascript](/readme-documents/validation-results/quiz-pg-js-clear-result.png)
* [Results page javascript](/readme-documents/validation-results/results-pg-js-clear-result.png)

Initially when the project was run through the validators there were some errors and warnings which were addressed as follows:
* HTML Validator:
    * The initial HTML validator results for all pages returned the same warning that *'The type attribute is unnecessary for JavaScript resources'*. To resolve this, the type attribute in the script tag for linking the html file to the applicable JavaScript file was deleted.  
* CSS Validator:
    * The only error that initially appeared was addressed as mentioned above. The warning was also addressed as mentioned above.  
* Javascript Validator:
    * Home Page:
        * The initial JSHint Validator results for the Home page are [here](/readme-documents/validation-results/home-pg-js-initial-result.png). In order to remove the three warnings, the missing semicolons were added and, in relation to the *'functions declared within loops referencing an outer scoped variable may lead to confusing semantics (showHideUsernameForm, showHideRules)'* warning, the initial function running on the inital html document load was split up so that it did not contain the function that would run when either the Rules or Create Username buttons were clicked that would determine which button was clicked and call the showHideUsernameForm or showHideRules function accordingly. Instead a separate checkButtonClicked function was created to check which button was clicked and call the showHideUsernameForm or showHideRules function accordingly.  
    * Quiz Page: 
        * The initial JSHint Validator results for the Quiz page are [here](/readme-documents/validation-results/quiz-pg-js-initial-result.png). In order to remove the 4 warnings, the missing semicolons were added and the unnecessary semicolon was removed. In relation to the the *'The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype'* warning, the 'for in' loop concerned was replaced with a normal for loop instead. 
    * Results Page: 
        * The initial JSHint Validator results for the Results page are [here](/readme-documents/validation-results/results-pg-js-initial-result.png). In order to remove the undefined variables, these were variables declared in loops that were missing the 'let' keyword, which was added. In order to remove the missing semicolon warnings, the missing semicolons were added. Adding the missing 'let' keyword to the loop variables removed the *'Creating global 'for' variable. Should be 'for(var highestRoundNumber)...'* warning.    

## UX (User Experience) Stories Testing
1. As a user of the site, I want to see what the site is all about and how the quiz works.

    ![Responsive view of live website Home page](/readme-documents/screenshots/home-page-screenshot.png)

    * Upon visiting the Home page the user is greeted with an eye catching question mark central illustration which rotates once clockwise and then once counterclockwise, highlighting the theme of questions and quizzing. The page title of 'Taking Care of Quizness' is a play on words, drawing the user's interest. It has the appearance of being written with a marker pen reminiscent of a quiz team captain jotting a quiz team name down on an answer sheet. The site name is displayed clearly in the header, immediately telling the user that this is a quiz website. 
    * The user is greeted with a 'Rules' button, prompting the user to click on it. This button can be toggled to open and close a list of rules for the quiz. The rules provide the user with useful information such as:
        * how many rounds there are in a quiz and how many questions in a round, so the user knows roughly how much time will be required to complete the quiz;
        * that the quiz is multiple choice with one correct answer per question; 
        * that the user can submit each round of questions to see how they did in that round; 
        * that the user can get their quiz results by clicking on the 'Get Quiz Results' when they have submitted the last round; 
        * that there are three score categories with comical names which are a play on words, prompting the user to wonder which category they will fall into; and
        * that there are five different quizzes available for the user to complete.
    * The user is also greeted with a 'Create Username' button which can be toggled to open and close the form to create a username. The user is immediately told when the form is open, that the username is optional.
    * Lastly, the user is greeted with a 'Start Quiz' button which is self explanatory and also referred to in rule 1 of the Rules, prompting the user to start the quiz.  

2. As a user of the site, I want to be able to easily navigate the site. 

    ![View of header bar on larger screens](/readme-documents/screenshots/large-screen-header.png)
    ![View of header bar on smaller screens](/readme-documents/screenshots/small-screen-header.png)

    * The navigation links to the Home and Quiz pages are clearly set out in the header bar and the names of the pages clearly indicate what they are about. Having the site navigation at the top of the page is a common website convention that the user will be familiar with. 
    * When landing on the Home page, the user can, at a glance, see that the word 'Home' in the header is underlined in a dark pink colour whereas the Quiz page name is not. This intuitively tells the user that a dark pink underline indicates the page that the user is currently on. 
    * A light cyan coloured line appears underneath each page name when hovered over or focussed on, indicating an action that the user can take to navigate to the other page. 
    * As well as the links in the header, the user is prompted, on the Home page, to start the quiz by clicking on the 'Start Quiz' button and, on the Results page, to complete another quiz by clicking on the 'Play Again!' button, in both cases providing another route for the user to easily get to the central Quiz page without having to scroll back up to the header. 
    * The user purposely can only access the Results page once the user completes a quiz, so that the Results page the user sees is populated with their result information.
    * The user can also navigate back to the Home page by clicking on the 'Taking Care of Quizness' title, which is also a common website convention.   

3. As a user of the site, I want some interim feedback on how I'm doing before I finish all the quiz questions. 

    ![Responsive view of live website Quiz page with submitted round feedback](/readme-documents/screenshots/quiz-feedback-screenshot.png)
    
    * The user is informed in the quiz rules on the Home page that they can submit each round of questions to see how they did in that round. 
    * Even if the user has skipped reading the rules, each quiz round is followed by a 'Submit Round' button prompting the user to click it. If the user tries to submit a round without answering all the questions in the round, they will be prompted to answer all the questions until they do. 
    * The user can easily see which answers they have selected by the radio button being selected and the font of the chosen answer changing. The user can also click anywhere on the answer button to select the radio button (they do not have to click on the radio button itself to select an answer), improving the ease of the user experience.
    * When the user submits a round, they receive immediate feedback with a green 'Correct!' or red 'Incorrect!' message appearing under the relevant photograph accompanying the question. 
    * A green tick appears underneath the correct answer and a red tick appears underneath the incorrect answers. If the user got the question wrong they can then see which answer was correct. 

4. As a user of the site, I want some interesting feedback when I complete a quiz, beyond just knowing what my total score was. 

    ![Responsive view of live website Results page](/readme-documents/screenshots/results-page-screenshot.png)
    ![View of example results generated on the live website Results page](/readme-documents/screenshots/results-feedback-screenshot.png)

    * When the user completes a quiz they can click on the 'Get Quiz Results' button to be taken through to the Results page.  
    * The user is firstly presented with their score bracket and their score comedic category; either Les Quizerables in red for a score of 0-5, Risky Quizness in blue for a score of 6-10 or The Quizard of Oz in green for a score of 11-15. This provides an element of fun and hinting as the user will know the bracket they scored but not their specific score, encouraging the user to move on to the quiz stats table to find out more information about how they did.
    * The stats table gives the user their overall score out of 15 as well as round information. The user is told which round or rounds were their best as well as the score out of 3 they received for that round or those rounds. This provides an element of interest and encourages the user to complete another quiz to see if a pattern emerges as to which round(s) are their strongest.  

5. As a user of the site, I want to have the opportunity to complete more than one set of quiz questions during my visit.

    ![Responsive view of live website Quiz page showing different quizzes](/readme-documents/screenshots/quiz-page-screenshot.png)

    * The user is told in the Rules on the Home page that there are 5 quizzes available for the user to complete. 
    * When a user completes their first quiz they are also presented with a message on the Results page reminding them that there are 5 quizzes to play in total and encouraging the user to click the 'Play Again!' button to play another quiz. 
    * The user can easily navigate to the Quiz page to complete another quiz by clicking the 'Play Again!' button or clicking on 'Quiz' in the header bar. 
    * As the Quiz page is dynamically filled with the chosen question set, rather than the site containing 5 different pages with static quizzes, the site helps the user keep track of when they have completed all 5 available quizzes in the same session. When the user clicks the 'Get Quiz Results' button after completing the 5th quiz, they will receive an alert to inform them that they have now completed all 5 quizzes. This will save the user navigating back to the Quiz page only to find that they have completed all the quizzes already. 

6. As a user of the site, I don't want to be given the same set of questions twice during my visit.

    * The site has been specifically designed so that the user will not receive the same set of questions in the same user session until after they have completed all 5 available quizzes. 
    * Although the order in which the user receives the sets of quiz questions is randomly generated, the quiz sets do go through a filtering process so that the user does not receive the same question set twice until after they have completed all 5 quizzes. 
    * This maintains user interest and avoids the user having to refresh the Quiz page multiple times until by chance they get a quiz they haven't already done, thus minimising user frustration.

7. As a user of the site, I want some useful links related to quizzing to continue my quizzing experience. 

    ![View of footer on larger screens](/readme-documents/screenshots/footer-large-screen.png) 
    ![View of footer on smaller screens](/readme-documents/screenshots/footer-small-screen.png) 
 
    * The footer contains two links described with icons and words. 
    * The first link has a pen icon accompanied by the wording 'Write a Quiz' and the second link has a book icon accompanied by the wording 'Improve Your Knowledge', clearly explaining what the links are. The user can therefore be inspired to write their own quiz or gain tips to improve their general knowledge. 
    * As the footer appears on every page, the user can access the footer links from anywhere on the site, however the footer is only 'sticky' on the Home and Results pages. Having a sticky footer on the Home and Results pages only makes sense as these are the pages where the user will be most interested in accessing these external links e.g. brushing up on their general knowledge before even starting the quiz or being inspired to write their own quiz once they reach the Results page after completing the 5th quiz. A sticky footer causes minimal interference with the Home and Results pages. A sticky footer on the Quiz page is unncessary as the user will be preoccupied with answering the quiz questions and will also cause user irritation by blocking part of the screen as the user tries to scroll through the quiz questions. 
    * As with the header, hovering over or focussing on the footer links shows a light cyan underline indicating an action for the user to take. The user will already be familiar with this behaviour from the site navigation links in the header. 
    * Each external footer link opens up in a new tab so that the user can easily get back to the website. 

8. As a user of the site, I want a comforting familiar layout as I go through the site with an attractive colour scheme and imagery to accompany my quiz experience. 
    
    * Once the user has visited the Home page, the same header and footer appear on each page, providing familiarity to the user. 
    * The Home page and Results page have a similar layout with a central pastel illustration with either stacked buttons/information underneath on smaller screens, or the buttons/information sitting either side of and below the illustration for larger screens. 
    * Although the Quiz page has a different layout, the questions are stacked on top of each other on smaller screens and each set of round questions appear next to each other horizontally on larger screens, maintaining a familiar down the page flow through all pages on smaller screens and across and down the page on larger screens.
    * The button at the bottom of each page is alway a link to another page, providing a familiar structure to the user. On the Home page the bottom button takes the user to the Quiz page, on the Quiz page the bottom button takes the user to the Results page and on the Results page, the bottom button takes the user to the Quiz page to try another set of quiz questions. 
    * The colour scheme of blues and greens has been purposely chosen as these colours are associated with concentration and productivity, helping the user to focus on the quiz. The purples and pinks then provide an attractive contrast ensuring that the site remains attractive to users with different types of colour blindness.
    * The user receives a unique photograph to accompany every single quiz question across all 5 sets of quiz questions. These photos are either directly related to the particular question, helping the user (e.g. in Fish or Not round, each question asking the user whether a particular creature is a fish or not is accompanied by a photo of that creature, helping the user if they didn't know what that creature looked like) or else related to the theme of the round. Either way the photos provide an added point of interest to the user's quiz experience.  

## Manual Testing of Functionality and Responsiveness on Every Page

The manual testing of the website was carried out on the following devices:

1. Mobile phone (Apple iPhone 5S with a device viewport size of 320px by 568px)
2. Mobile phone (Apple iPhone 11 with a device viewport size of 414px by 896px)
3. Tablet (Apple iPad mini with a device viewport size of 768px by 1024px)
4. Laptop (Apple MacBook Pro with a device viewport size of 1440px by 900px)
5. A large monitor (Asus monitor with a device viewport size of 1920px by 1080px) connected to the MacBook Pro

The website was tested on the following browsers on all of the above devices:

1. [Google Chrome](https://www.google.co.uk/chrome/?brand=FHFK&gclid=EAIaIQobChMI3b-xi9y38QIVBrTtCh2I1g3AEAAYASAAEgJN5vD_BwE&gclsrc=aw.ds)
2. [Microsoft Edge](https://www.microsoft.com/en-us/edge)
3. [Firefox](https://www.mozilla.org/en-GB/firefox/new/)
4. [Safari](https://www.apple.com/uk/safari/) 

The site was created using the Chrome browser and Chrome DevTools and was fully tested in that environment as it was being developed by testing all of the points mentioned below and the responsiveness of the site, all of which behaved as expected. The site was then further tested after deployment on all of the above devices and browsers. The testing comments below apply to all of the above devices and browsers, unless otherwise specified. 

### Home Page

1. The question mark illustration rotation animation works as expected on page load, rotating once clockwise and once counterclockwise with a slight delay in the rotation starting. 
2. A light blue (Light Cyan) coloured line appears under each of the page navigation links in the header and the footer links when hovering over them or focussing on them on the laptop and large monitor and when tapping on them on the touch screen devices. 
3. A dark pink (Indian Red) coloured line appears under the Home page navigation link as expected to indicate that the user is on the Home page.  
4. Clicking on the Quiz page link in the header takes the user through to the Quiz page as expected on all devices. 
5. Clicking on all of the footer links takes the user through to the expected external sites, with each external site opening up in a new tab. 
6. Clicking on the Taking Care of Quizness title logo or on the Home page navigation link in the header keeps the user on the Home page. Whether the link works on the laptop and monitor was tested by clicking on the title logo and the Home page navigation link which both kept the user on the Home page and re-started the question mark rotation animation which is triggered by the page loading, indicating that the links worked. On the tablet and mobile devices tested, tapping the title logo or Home page navigation link also triggered the question mark rotation animation indicating that the links work. 
7. The Rules button shows the quiz rules when clicked and hides them when clicked again. The rules display as expected and are contained in a box with a Dark Cyan shadow as expected.
8. The Create Username button shows the 'create username' form when clicked and hides it when clicked again. The username form displays as expected and is contained in a box with a Dark Cyan shadow as expected. 
9. The 'create username' form works as expected when the user submits a username. If the user clicks on the 'Submit Username' button without typing in a username, the user is prompted to fill in the username field. Text can be typed in the text box for the username and a blue line appears around the text box when selected by the user (or a black line in the Edge browser on the laptop device) as well as a cursor appearing in the text box. When the user fills in a username and clicks on the 'Submit Username' button, the button and text field are disabled, the 'Submit Username' button colour scheme changes to grey and the button reads 'Submitted!'. If the user clicks the 'Create Username' button again to close the form and clicks again to re-open the form, the form remains disabled and the button keeps its 'Submitted!' text and grey colour scheme. 
10. Clicking on the 'Start Quiz' button takes the user through to the Quiz page as expected on all devices.   
11. The Home page appears as expected on all mobile devices and on the tablet device tested on all browsers in both portrait and landscape view. 
12. The Home page appears as expected on all browsers on the laptop and monitor screens. The full screen was exited on the laptop and monitor and the window was made the smallest it could be and was then expanded until it took up the full screen again. The Home page was fully responsive at all points and displayed as expected as the screen window size was changed in all browsers tested. 
    
### Quiz Page
13. Items 2-5 tested for the Home page were repeated for the Quiz page and work as expected. For Item 3 the dark pink (Indian Red) coloured line appears instead under the Quiz page navigation link. Item 4 was tested by clicking on the Home page link in the header which takes the user through to the Home page as expected on all devices. 
14. Item 6 was tested for the Quiz page by clicking or tapping on the Taking Care of Quizness title logo which takes the user back to the Home page. 
15. Clicking on the Quiz page link in the header keeps the user on the Quiz page as expected but as the page is refreshed the set of quiz questions may change, as expected.
16. All of the quiz questions display as expected on all devices, with no missing photos, questions or answers. The photos are appropriately sized for the different screen sizes and orientations. 
16. In terms of quiz answer functionality, the user can only select one answer per question. The answer is shown as having been selected on all devices with a light grey circle appearing in the radio button on the mobile devices and tablet device tested (a blue circle on the laptop device apart from on the Edge browser where it is a dark grey circle) and the font of the chosen answer changing from Raleway to Slackey, all as expected. 
17. In terms of the 'Submit Round' button functionality, if the user tries to click the button without having answered all the questions in the round, the user is prompted to answer the missing question(s). Once the user has answered all questions in a round and clicks the 'Submit Round' button the text of the 'Submit Round' button changes to 'Submitted!' and the colour scheme changes to grey. The 'Submit Round' button for the round submitted is then disabled as are the radio buttons so the user is not able to change their answers and re-submit the round. The user receives immediate feedback when the 'Submit Round' button is clicked once a round is completed. A green tick appears underneath each correct answer in the round and a red cross appears underneath each incorrect answer. Depending on whether the user got the question right or wrong, a green 'Correct!' message appears underneath the applicable question photo or alternatively a red 'Incorrect!' message. The 'Correct' and 'Incorrect' messages do not overflow the space underneath the photo. This behaviour across all devices is as expected. 
18. In terms of the 'Get Quiz Results' button, if the user tries to click this before submitting all five quiz rounds, they are given an alert message asking them to 'Please submit all 5 rounds to get your results', as expected. If the user clicks the 'Get Quiz Results' button when they have completed all the rounds in their fifth quiz, they are given an alert message informing them that they have now completed all 5 quizzes. When the user has submitted all 5 rounds and clicks on the 'Get Quiz Results' button, they are then taken to the Results page. 
19. To methodically test all the answers:
    * on the iPhone 11 device:
        * on the Chrome browser, all the 1st answers for each question were chosen for all 5 quizzes;
        * on the Firefox browser, all the 2nd answers;
        * on the Edge browser, all the 3rd answers for questions 1-3 (and a mixed selection for the True/False and Fish or Not rounds which only have 2 answers per question); and 
        * on the Safari browser all the 4th answers for questions 1-3 (again with a mixed selection for the True/False and Fish or Not rounds). 
    * on the iPad mini device:
        * on the Chrome browser, all the 3rd answers for questions 1-3 (and a mixed selection for the True/False and Fish or Not rounds which only have 2 answers per question);
        * on the Firefox browser, all the 4th answers for questions 1-3 (again with a mixed selection for the True/False and Fish or Not rounds); 
        * on the Edge browser, all the 1st answers; and
        * on the Safari browser, all the 2nd answers. 
    * on the Macbook Pro laptop:
        * on the Chrome browser, all the 2nd answers; 
        * on the Firefox browser, all the 3rd answers for questions 1-3 (and a mixed selection for the True/False and Fish or Not rounds which only have 2 answers per question);
        * on the Edge browser, all the 4th answers for questions 1-3 (again with a mixed selection for the True/False and Fish or Not rounds); and
        * on the Safari browser, all the 1st answers. 
    * on the iPhone 5S device:
        * on the Chrome browser, all the 4th answers for questions 1-3 (and a mixed selection for the True/False and Fish or Not rounds which only have 2 answers per question);
        * on the Firefox browser, all the 1st answers; 
        * on the Edge browser, all the 2nd answers; and
        * on the Safari browser, all the 3rd answers for questions 1-3 (again with a mixed selection for the True/False and Fish or Not rounds). 
    The developer checked to make sure that the user received the correct 'Correct!' or 'Incorrect!' message depending on whether the user was wrong or right for each question and that the ticks appeared underneath the correct answers and the crosses underneath the incorrect ones. All functionality behaved as expected. 
20. To make sure that the user did not receive the same set of questions twice in a session and that the question sets appeared in a random order, the developer made a note of the question sets appearing on each device on each browser and the question sets appeared in a random order. The user did not receive the same question set twice in a session until they had completed all 5 available quizzes. If the user clicked refresh on the Quiz page part way through a session or returned to the Home page and then back to the Quiz page, for example, this did not affect the user receiving the 5 different quizzes in a session. If the user clicked the back button on the Results page to return to their submitted results on the Quiz page and then clicked 'Get Quiz Results' again, this did not affect the user receiving the 5 different quizzes in a session and being told when they had completed all 5. 
21. The developer further tested the user receiving 5 different quizzes in a session on a selection of browsers on the tested devices by completing some of the quiz sets and then refreshing the Quiz page multiple times to ensure that the user is only ever offered the quiz sets not already completed in that session. For example, once the user had submitted 3 sets of quiz questions, leaving only 2 sets remaining available, if the user clicked refresh on the Quiz page, they would only ever be offered the 2 remaining quizzes not yet completed until the user had completed all 5.
22. The Quiz page appears as expected on all mobile devices and on the tablet device tested on all browsers in both portrait and landscape view. 
23. The Quiz page appears as expected on all browsers on the laptop and monitor screens. The full screen was exited on the laptop and monitor and the window was made the smallest it could be and was then expanded until it took up the full screen again. The Quiz page was fully responsive at all points and displayed as expected as the screen window size was changed in all browsers tested. 

### Results Page 
24. Items 2 and 5 tested for the Home page were repeated for the Results page and work as expected. 
25. Item 3 tested for the Home page was not applicable for the Results page as there is no header navigation link to the Results page.
26. Item 4 was tested by clicking on both the Home page and Quiz page links in the header which took the user through to the Home page and Quiz page respectively, as expected, on all devices. 
27. Item 6 was tested for the Results page by clicking or tapping on the Taking Care of Quizness title logo which takes the user back to the Home page. 
28. All of the quiz results display as expected on all devices, with no missing results information. 
29. If the user enters a username on the Home page, this is displayed in front of 'You Are' as expected for the whole user session. If the user changes their username part way through a session, the updated username displays for the rest of the user's session. If the user chooses not to create a username, the Results page just displays 'You Are' without anything looking out of place. 
30. Whilst testing the quiz page, the developer kept a record of the scores for each quiz played and checked these against the Results page. The score category, total score, best round(s) and best round score(s) were as expected each time the quiz was played. 
31. The 'Play Again!' button navigated back to the Quiz page on all browser and devices tested. Whether the user gets back to the Quiz page via the 'Play Again!' button or the Quiz page navigation link in the header or via the Home page made no difference to functionality. 
32. The Results page appears as expected on all mobile devices and on the tablet device tested on all browsers in both portrait and landscape view. 
33. The Results page appears as expected on all browsers on the laptop and monitor screens. The full screen was exited on the laptop and monitor and the window was made the smallest it could be and was then expanded until it took up the full screen again. The Results page was fully responsive at all points and displayed as expected as the screen window size was changed in all browsers tested. 

## Further Testing

### Friends and Family

Friends and family were sent a link to the site to highlight any user experience or appearance issues. The following devices and browsers were tested without any issues being flagged:
* iPhone 12 - Safari browser
* Moto G9 Plus - Chrome browser
* Samsung S10 - Chrome browser
* Samsung A21 - Samsung Internet browser
* iPad Pro 2020 - Safari browser
* Dell XPS 15 9560 laptop with a 4K Acer Monitor  - Microsoft Edge (Chromium) browser

### Contrast Checker

The foreground text colours and their background colours were tested using the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). The following combinations were tested and all received at least a WCAG AA pass. The results are as follows: 

* The Taking Care of Quizness logo and header page navigation link colour of Light Cyan (#e6feff) was tested against the header colour of Teal (#1c797d) (the same colour contrast also appears on the Submit Round buttons on the Quiz page):
    * [results](/readme-documents/contrast-checker-results/header-contrast.png)
* The footer link colour of Light Cyan (#e6feff) was tested against the Purple colour (#955b92) of the footer background:
    * [results](/readme-documents/contrast-checker-results/footer-contrast.png) 
* The page heading on all pages in the colour of Indian Red (#b74e74) was tested against the page background colour of Light Cyan (#e6feff):
    * [results](/readme-documents/contrast-checker-results/page-heading-contrast.png) 
* The text colour on the Home Page buttons of Light Cyan (#e6feff) was tested against the background button colour of Indian Red (#b74e74) (this colour contrast also appears on the Get Quiz Results and Play Again buttons on the Quiz and Results pages):
    * [results](/readme-documents/contrast-checker-results/home-pg-button-contrast.png)
* The text colour of the Round headings on the Quiz page of Purple (#955b92) was tested against the page background colour of Light Cyan (#e6feff):
    * [results](/readme-documents/contrast-checker-results/round-heading-contrast.png)
* The text colour of the Light Cyan (#e6feff) questions on the Quiz page was tested against the Dark Cyan (#007d9e) background (the same colour contrast also appears on the Submit Username button on the Home page):
    * [results](/readme-documents/contrast-checker-results/quiz-question-contrast.png) 
* The text colour of the answer buttons on the Quiz page in Dark Cyan (#007d9e) was tested against the Light Cyan (#e6feff) background:
    * [results](/readme-documents/contrast-checker-results/quiz-answer-contrast.png) 
* The text colour of the Incorrect feedback message, the crosses underneath the quiz answers, and the red colour used in the Home page rules and on the Results page quiz results category (Red (#e00000)) was tested against the Light Cyan (#e6feff) background:
    * [results](/readme-documents/contrast-checker-results/red-text-contrast.png) 
* The text colour of the Correct feedback message, the ticks underneath the quiz answers, and the green colour used in the Home page rules and on the Results page quiz results category (Green (#008500)) was tested against the Light Cyan (#e6feff) background:
    * [results](/readme-documents/contrast-checker-results/green-text-contrast.png) 
* The text colour of the blue colour used in the Home page rules and on the Results page quiz results category (Blue (#0000ff)) was tested against the Light Cyan (#e6feff) background:
    * [results](/readme-documents/contrast-checker-results/blue-text-contrast.png) 
* The text colour of submitted buttons (Dark Slate Gray (#283d3e)) was tested against the Dark Gray (#95b0b1) colour: 
    * [results](/readme-documents/contrast-checker-results/submitted-button-contrast.png) 

### Lighthouse Reports

[Lighthouse reports](https://developers.google.com/web/tools/lighthouse) were run on all the pages of the live site within the Chrome browser. Initial reports highlighted some issues that were subsequently rectified. These were an SEO warning when a report was run for mobile that the header navigation link 'tap targets' were not sized appropriately (88% appropriately sized). The font size was subsequently increased and the links were spaced out more. The Lighthouse report run on the Quiz page for both mobile and desktop highlighted an Accessibility issue that one of the input elements on the Quiz page (for the quiz answers) did not have an associated label and that the requirement for no form fields to have multiple labels had also failed. This turned out to be that the for attribute value was accidentally duplicated for 2 questions in different rounds leading to the failures that one input had two labels and one input element had no label. This was rectified by correcting the for attribute to match the id of the correct input element. The Lighthouse reports run on the final live site are as follows: 
* [Home page mobile results](/readme-documents/lighthouse-results/home-pg-mobile-lighthouse.png)
* [Home page desktop results](/readme-documents/lighthouse-results/home-pg-desktop-lighthouse.png)
* [Quiz page mobile results](/readme-documents/lighthouse-results/quiz-pg-mobile-lighthouse.png)
* [Quiz page desktop results](/readme-documents/lighthouse-results/quiz-pg-desktop-lighthouse.png)
* [Results page mobile results](/readme-documents/lighthouse-results/results-pg-mobile-lighthouse.png)
* [Results page desktop results](/readme-documents/lighthouse-results/results-pg-desktop-lighthouse.png)

## Fixed Bugs

* When preparing the JavaScript file for the home page, I was having to intially click twice on the Rules and Create Username buttons to display the Rules and username form. This was because in the if statements in the showHideRules and showHideUsernameForm functions when I was asking the function to check whether the Rules container div and create username container form were empty when the Rules or Create Username buttons were clicked (which should have resulted in the display of the rules and form) I had left a space between the quotation marks so the function was actually checking whether the containers had 1 empty space in them instead of nothing at all. This meant that the 'else' part of the if/else statement was initially firing so the rules and username form were not displayed and the buttons did not work on the first click. However the else statements then added in a single blank space in the containers so when the Rules and Create Username buttons were clicked for a second time, the if statements fired and the rules and create username forms were shown. This was simply fixed by removing the single space between the quotation marks so that the Rules and Create Username button displayed their contents on the first initial click instead of the second click. 
* Another bug was that the event listener being attached to an element, listening out for 'submit', was not firing the function when the submitting occurred. This was because I had attached the submit event listener to the form submit button element and not to the form element itself. As it is the form that gets submitted and not the button, this was corrected by attaching the event listener to the form element instead of the button element. 
* In the handleSubmit function on the Quiz page javascript file, the function has a number of sub-functions which it calls. These sub-functions needed to know which round form out of the 5 on the page had been submitted by the user. Initially I tried to pass the event as an argument to the sub-functions and refer to 'this' in the sub-functions to reference the form that had been submitted but this did not work. I then went on to turn 'this' into a variable in the handleSubmit function and passed both the event and the variable as arguments to the sub-functions. However, to reduce the required code I eventually settled on just passing the event as an argument and referring to 'event.target' instead of the variable to reference the submitted form within the sub-functions. 
* The bug picked up by the lighthouse reports (as mentioned above) was also picked up in manual testing. One of the questions was saying that the user had got the question incorrect when they had got it correct. This prompted further investigation and alongside the lighthouse report the source of the problem was found and rectified. 
* When carrying out the manual testing, I noticed that if a user clicked on the 'Get Quiz Results' button before submitting all 5 rounds on completing their 5th quiz, the user would receive an alert to say that they had completed all 5 quizzes followed by an alert than they needed to submit all 5 rounds to get their results. The order of the alerts was not ideal and also, because the clicking of the button before the user had submitted all 5 rounds triggered the clearing of the quiz sets completed so far in session storage, if the user then refreshed the page without submitting the 5th round, the sessionstorage would start from scratch as if the user was visiting the site for the first time. This was rectified by putting the code to push the quiz sets done so far to session storage and the code to check whether the user was on their fifth round and alert them of that WITHIN the if statement that checked whether the user had submitted all 5 rounds before trying to get their results. This now means that if the user clicks the Get Quiz Results button before submitting all 5 quiz rounds, the user is prompted to submit all 5 rounds. If the user is on their 5th quiz they will now not get an alert that they have completed all quizzes with the session storage record being cleared until the user has actually submitted all 5 rounds and is taken through to the Results page. 
* In terms of CSS, for some reason I was unable to create a single grid on an overarching container on the Quiz page and include all the quiz round questions within the one grid. The grid was pushing the question boxes into one column instead of spreading the question boxes across all 3 columns. Although only one column was technically required for smaller screens, 3 would be needed for larger screens so I included 3 columns from the outset. However, as the grid would not spread the question boxes across all 3 columns, I instead found a workaround by creating a separate grid to contain each round and the 'Get Quiz Results' button. This has resulted in more lengthy code but the CSS grid structure works as expected across all devices.   

## Unfixed Bugs

* The developer is not aware of any unfixed bugs. However, when the iPhone 5S device was tested, for some reason the height of the header was smaller than the height of the footer. This should not have been the case as the header had the following code 'height: clamp(120px, 20vh, 150px);' and the footer had a fixed height of 100px. The header should therefore have had a minimum height of 120px and been bigger than the footer. This was fixed by giving the header a default fixed height (and the footer height was reduced after reviewing the look of the site on the iPhone 5S) with the clamp code being reintroduced in the media query for screens 376px+ wide. Although this bug was ultimately fixed with a workaround, the reason why the iPhone 5S device was not recognising the 'clamp' value for the header across all browsers tested is unknown.  
    
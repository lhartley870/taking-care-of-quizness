# Testing

## Validators
[The W3C Markup Validation Service](https://validator.w3.org/) was used for testing the html code for the site. The following results show that no errors have been found: 
* [Home page html](/readme-documents/validation-results/)
* [Before You Go page html](/readme-documents/validation-results/)
* [When in Oz page html](/readme-documents/validation-results/)
* [Gallery page html](/readme-documents/validation-results/)
* [Contact page html](/readme-documents/validation-results/)

[The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used for testing the css code for the site. With the style.css file, validation was run using direct copying and pasting of the css code which gave [this result](/readme-documents/validation-results/) with [this warning](/readme-documents/validation-results/) saying *'Imported style sheets are not checked in direct input and file upload modes'*. I therefore ran the style.css file validation using the URI which gave the following clear results:
* [style.css file](/readme-documents/validation-results/) 
and the warning had disappeared (see [here](/readme-documents/validation-results/)).

[The JSHint Validator](https://jshint.com/) was used for testing the javascript code for the site. The following results show that no errors have been found:
* 
* 
* 

Initially when the project was run through the validators there were some errors and warnings which were addressed as follows:
* 
* 

## UX (User Experience) Stories Testing
1. As a user of the site, I want to see what the site is all about and how the quiz works.

    ![Responsive view of live website Home page](/readme-documents/screenshots/)

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

    ![View of header bar on larger screens](/readme-documents/screenshots/)
    ![View of header bar on smaller screens](/readme-documents/screenshots/)

    * The navigation links to the Home and Quiz pages are clearly set out in the header bar and the names of the pages clearly indicate what they are about. Having the site navigation at the top of the page is a common website convention that the user will be familiar with. 
    * When landing on the Home page, the user can, at a glance, see that the word 'Home' in the header is underlined in a dark pink colour whereas the Quiz page name is not. This intuitively tells the user that a dark pink underline indicates the page that the user is currently on. 
    * A light cyan coloured line appears underneath each page name when hovered over or focussed on, indicating an action that the user can take to navigate to the other page. 
    * As well as the links in the header, the user is prompted, on the Home page, to start the quiz by clicking on the 'Start Quiz' button and, on the Results page, to complete another quiz by clicking on the 'Play Again!' button, in both cases providing another route for the user to easily get to the central Quiz page without having to scroll back up to the header. 
    * The user purposely can only access the Results page once the user completes a quiz, so that the Results page the user sees is populated with their result information.
    * The user can also navigate back to the Home page by clicking on the 'Taking Care of Quizness' title, which is also a common website convention.   

3. As a user of the site, I want some interim feedback on how I'm doing before I finish all the quiz questions. 

    ![Responsive view of live website](/readme-documents/screenshots/)
    
    * The user is informed in the quiz rules on the Home page that they can submit each round of questions to see how they did in that round. 
    * Even if the user has skipped reading the rules, each quiz round is followed by a 'Submit Round' button prompting the user to click it. If the user tries to submit a round without answering all the questions in the round, they will be prompted to answer all the questions until they do. 
    * The user can easily see which answers they have selected by the radio button being selected and the font of the chosen answer changing. The user can also click anywhere on the answer button to select the radio button (they do not have to click on the radio button itself to select an answer), improving the ease of the user experience.
    * When the user submits a round, they receive immediate feedback with a green 'Correct!' or red 'Incorrect!' message appearing under the relevant photograph accompanying the question. 
    * A green tick appears underneath the correct answer and a red tick appears underneath the incorrect answers. If the user got the question wrong they can then see which answer was correct. 

4. As a user of the site, I want some interesting feedback when I complete a quiz, beyond just knowing what my total score was. 

    ![Responsive view of live website](/readme-documents/screenshots/)

    * When the user completes a quiz they can click on the 'Get Quiz Results' button to be taken through to the Results page.  
    * The user is firstly presented with their score bracket and their score comedic category; either Les Quizerables in red for a score of 0-5, Risky Quizness in blue for a score of 6-10 or The Quizard of Oz in green for a score of 11-15. This provides an element of fun and hinting as the user will know the bracket they scored but not their specific score, encouraging the user to move on to the quiz stats table to find out more information about how they did.
    * The stats table gives the user their overall score out of 15 as well as round information. The user is told which round or rounds were their best as well as the score out of 3 they received for that round or those rounds. This provides an element of interest and encourages the user to complete another quiz to see if a pattern emerges as to which round(s) are their strongest.  

5. As a user of the site, I want to have the opportunity to complete more than one set of quiz questions during my visit.

    ![Responsive view of live website ](/readme-documents/screenshots/)

    * The user is told in the Rules on the Home page that there are 5 quizzes available for the user to complete. 
    * When a user completes their first quiz they are also presented with a message on the Results page reminding them that there are 5 quizzes to play in total and encouraging the user to click the 'Play Again!' button to play another quiz. 
    * The user can easily navigate to the Quiz page to complete another quiz by clicking the 'Play Again!' button or clicking on 'Quiz' in the header bar. 
    * As the Quiz page is dynamically filled with the chosen question set, rather than the site containing 5 different pages with static quizzes, the site helps the user keep track of when they have completed all 5 available quizzes in the same session. When the user clicks the 'Get Quiz Results' button after completing the 5th quiz, they will receive an alert to inform them that they have now completed all 5 quizzes. This will save the user navigating back to the Quiz page only to find that they have completed all the quizzes already. 

6. As a user of the site, I don't want to be given the same set of questions twice during my visit.

    ![Responsive view of live website ](/readme-documents/screenshots/)

    * The site has been specifically designed so that the user will not receive the same set of questions in the same user session until after they have completed all 5 available quizzes. 
    * Although the order in which the user receives the sets of quiz questions is randomly generated, the quiz sets do go through a filtering process so that the user does not receive the same question set twice until after they have completed all 5 quizzes. 
    * This maintains user interest and avoids the user having to refresh the Quiz page multiple times until by chance they get a quiz they haven't already done, thus minimising user frustration.

7. As a user of the site, I want some useful links related to quizzing to continue my quizzing experience. 

    ![View of page on larger screens](/readme-documents/screenshots/) 
 
    * The footer contains two links described with icons and words. 
    * The first link has a pen icon accompanied by the wording 'Write a Quiz' and the second link has a book icon accompanied by the wording 'Improve Your Knowledge', clearly explaining what the links are. The user can therefore be inspired to write their own quiz or gain tips to improve their general knowledge. 
    * As the footer appears on every page, the user can access the footer links from anywhere on the site, however the footer is only 'sticky' on the Home and Results pages. Having a sticky footer on the Home and Results pages only makes sense as these are the pages where the user will be most interested in accessing these external links e.g. brushing up on their general knowledge before even starting the quiz or being inspired to write their own quiz once they reach the Results page after completing the 5th quiz. A sticky footer causes minimal interference with the Home and Results pages. A sticky footer on the Quiz page is unncessary as the user will be preoccupied with answering the quiz questions and will also cause user irritation by blocking part of the screen as the user tries to scroll through the quiz questions. 
    * As with the header, hovering over or focussing on the footer links shows a light cyan underline indicating an action for the user to take. The user will already be familiar with this behaviour from the site navigation links in the header. 
    * Each external footer link opens up in a new tab so that the user can easily get back to the website. 

8. As a user of the site, I want a comforting familiar layout as I go through the site with an attractive colour scheme and imagery to accompany my quiz experience. 

    ![View of site footer](/readme-documents/screenshots/)
    
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

### Results Page

## Further Testing

### Friends and Family

Friends and family were sent a link to the site to highlight any user experience or appearance issues. The following devices and browsers were tested without any issues being flagged:
* iPhone XS - Safari browser
* iPhone 12 - Safari browser
* Moto G9 Plus - Chrome browser
* Amazon Fire HD 10 - Chrome browser 
* Windows 10 LG 24UD58 24 inch 4K UHD monitor - Microsoft Edge browser
* Samsung A21 - Chrome browser

### Contrast Checker

The foreground text colours and their background colours were tested using the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). The following combinations were tested and all received at least a WCAG AA pass. The results are as follows: 

### Lighthouse Reports

[Lighthouse reports](https://developers.google.com/web/tools/lighthouse) were run on all the pages of the live site within the Chrome browser. 

## Fixed Bugs

* 

## Unfixed Bugs

* 
    
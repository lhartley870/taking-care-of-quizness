# Taking Care of Quizness
Taking Care of Quizness is a site intended to provide an exciting multiple choice quiz experience for anyone who enjoys general knowledge quizzes. Taking Care of Quizness will be useful for quiz enthusiasts as it dynamically provides 5 different sets of quiz questions to keep the user's interest, without any of the quizzes being repeated in the same user session. Each quiz is split into 5 rounds of 3 questions and the quiz allows the user to see what they got correct and incorrect on a round by round basis. The site also provides the user with statistics on which round or rounds were their best as well as the usual total score result at the end. Each question in all 5 sets of quizzes is accompanied by a unique photo to provide appealing visuals during the user's quiz experience. 

The live project can be viewed [here](https://lhartley870.github.io/taking-care-of-quizness/). 

![Responsive view of live website Home page](/readme-documents/screenshots/home-page-screenshot.png)

## UX (User Experience) 
### Users
Users of this website are typically going to be people who are searching for an exciting multiple choice quiz experience.

### User Stories
* As a user of the site, I want to see what the site is all about and how the quiz works.
* As a user of the site, I want to be able to easily navigate the site. 
* As a user of the site, I want some interim feedback on how I'm doing before I finish all the quiz questions. 
* As a user of the site, I want some interesting feedback when I complete a quiz, beyond just knowing what my total score was. 
* As a user of the site, I want to have the opportunity to complete more than one set of quiz questions during my visit.
* As a user of the site, I don't want to be given the same set of questions twice during my visit.
* As a user of the site, I want some useful links related to quizzing to continue my quizzing experience.  
* As a user of the site, I want a comforting familiar layout as I go through the site with an attractive colour scheme and imagery to accompany my quiz experience. 

## Wireframes

I used [Balsamiq](https://www.balsamiq.com) to create Wireframe mock-ups for laptop/large monitor, tablet and mobile devices which can be found here: 
* [Home Page](/readme-documents/wireframes/home-pg-wireframe.png) 
* [Quiz Page](/readme-documents/wireframes/quiz-pg-wireframe.png) 
* [Results Page](/readme-documents/wireframes/results-pg-wireframe.png) 

The Wireframes were a useful aid prior to starting to build the site but the design did evolve in the following respects and for the following reasons:

### Home Page
* The Home Page was largely implemented as designed except that the original intention was to have two static quizzes named Quiz 1 and Quiz 2. In the end the website was made more complex by including JavaScript that dynamically selects from 5 sets of quiz questions. The Quiz 2 page was therefore dropped and Quiz 1 just became the Quiz page. The Home page largely appears as originally designed for large and mobile screens. For the tablet screen the original design idea was not practical in reality as there was not enough room to have the original design on a portrait oriented tablet. The mobile design was therefore used for tablet. 

### Quiz Page
* The Quiz Page was largely implemented as designed for mobile and tablet. The original idea with larger screens was to have each question box stacked over the edge of the one below as shown in the wireframe. The original design also anticipated doing away with the crosses and ticks underneath the quiz answers and instead having a tick/cross and message of 'Correct' or 'Incorrect' appear in the space next to each box. In the end this design was not practical as the question boxes were longer in height than width which did not lend itself to the design which anticipated the question boxes being longer in width than height. The design was instead adapted so that all 3 questions in a round would be side by side on larger screens. Again, this did not lend itself to having the 'Correct'/'Incorrect' message anywhere other than within the question box itself. The message and ticks and crosses were all incorporated for mobile screens and larger and so the same feedback structure was kept for laptop screens as well. 

### Results Page
* The Results Page was largely implemented as designed but with the addition of a 'Play Again' button and a clipboard illustration to add interest. After playing around with putting the different elements of the Results page in boxes, it was decided to remove the box concept and just use a table for the result stats as this looked better. 

## Design

### Page Designs

The pages are designed to flow as the user takes each step through the journey of the website. 

The Home page design is clean and simple with a central rotating pastel coloured question mark illustration with buttons stacked on top of each other underneath for smaller screens and sitting either side and below the question mark illustration on larger screens. The 'Rules' and 'Create Username' buttons can be toggled to show and hide the quiz rules and create username forms respectively. The bottom 'Start Quiz' button then links the user to the Quiz page to begin their quiz. The buttons follow a stacked logical order on the Home page according to what the user is likely to want to do, namely, see what the rules are, (optionally) create a username and finally heed the call to action to begin the quiz. On larger screens the flow of the page is maintained with the Rules button to the left of the question mark image, the Create Username button to the right and the 'Start Quiz' button underneath.

This layout is repeated on the Results page. On smaller screens there is a central pastel coloured clipboard illustration with the user's results information stacked underneath. This consists of the user's results category and score bracket, the user's quiz stats and a message that there are 5 quizzes to complete followed by the 'Play Again' call to action button. Again this follows a logiacal order according to what the user is likely to want to know, namely, to see what their score bracket and quiz name are, which then encourages the user to scroll down to their quiz stats to find out their specific quiz score and best round(s), followed by a reminder message that there are 5 quizzes to complete with the button to play again. On larger screens the flow of the page is again maintained with the score bracket and quiz name to the left of the clipboard image, the quiz stats table to the right and the message and 'Play Again!' buttons underneath. 

The Quiz page follows the same stacked appearance on small to medium screens with each quiz question in its own container encouraging the user to keep scrolling down to firstly complete each round and then complete the whole quiz. Each Round is followed by a call to action 'Submit Round' button to give the user their round results and inform them of the correct and incorrect answers for each question to maintain user interest. When the user gets to the bottom of the page there is a 'Get Quiz Results' call to action button. On larger screens the three questions in each round are next to each other across the page with the 'Submit Round' button underneath which maintains the round by round flow of the quiz across and then down the page. 

### Fonts

I used [Google Fonts](https://fonts.google.com/) for the website fonts. The selected fonts and their fallbacks, should they not import into the site correctly, are as follows:

Selected Font | Fallback Font
------------- | --------------
Raleway | Sans-serif
Rock Salt | Cursive 
Slackey | Cursive 

I selected Slackey as the font for the Taking Care of Quizness title logo, the Round headings, button text and the text to display quiz answers the user has selected as it has a fun and energetic feel appropriate for the subject matter of the site. It is also reminiscent of a quiz team captain writing down a quiz team name with a marker pen, which fits in with the theme of the site. 

Google Fonts suggested the Rock Salt and Raleway fonts as popular pairings with Slackey. Raleway is a clear and easily readable font for use throughout the majority of the website. Rock Salt has a handwritten appearance, again reminiscent of a quiz team jotting down their quiz answers in a pub. Rock Salt was used for the page navigation links in the header, for the external website links in the footer and for the page headings. 

### Colours

The colour scheme used on the site is as follows: 

Colour Name | Hexadecimal Code
------------| ---------
Light Cyan | #e6feff
Dark Cyan | #007d9e
Teal | #1c797d
Indian Red | #b74e74
Purple | #955b92
Red | #e00000
Blue | #0000ff
Green | #008500
Dark Grey | #95b0b1
Dark Slate Grey | #283d3e
Light Pink | #ffa8a8

The general colour theme for the site was inspired by [this article](https://www.shiftelearning.com/blog/how-do-colors-influence-learning) on the Psychology of Colour in relation to learning. As the quiz is a fun but also educational website, I wanted a colour palette that would help the user to focus. The article revealed that green is good for concentration and blue is good for productivity. I therefore used [Eye Dropper](https://eyedropper.org/) on a teal colour I liked on a website to generate the Teal colour used in the header and elsewhere on the site. This colour was then used to generate colour palettes on [ColorSpace](https://mycolor.space/?hex=%231C797D&sub=1). The Light Cyan, Dark Cyan, Indian Red and Purple were all variations of colours largely generated by ColorSpace in the Matching Gradient and Spot palettes but were adjusted using the [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/) to make sure there was sufficient contrast for accessibility purposes. The Red, Blue and Green colours were standard colours chosen for the 'Correct'/'Incorrect' messages, tick and cross feedback and the colours for the different score categories, again adjusted for sufficient contrast with the background colour. The Dark Slate Grey and and Dark Grey used for buttons once submitted were chosen based on greys generated by ColorSpace and adapted for sufficient contrast. The Light pink colour was chosen as a colour complimentary to the Indian Red to be used on the 'Get Quiz Results' and 'Play Again!' buttons. 

I also used [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/), a colour blindness simulator, to test my website colour palette early on to make sure that the choice of colours and contrasts would still be visually appealing to people with different types of colour blindness. The combination of red/pink/purple based colours and blue/green based colours means that the site offers an appealing colour experience for all types of colour blindness tested using the simulator:

1. Anomalous Trichromacy: 
    * Red-Weak/Protanomaly
    * Green-Weak/Deuteranomaly
    * Blue-Weak/Tritanomaly

2. Dichromatic:
   * Red-Blind/Protanopia
   * Green-Blind/Deuteranopia
   * Blue-Blind/Tritanopia

3. Monochromatic:
   * Monochromacy/Achromatopsia
   * Blue Cone Monochromacy

Even though no colours can be seen with Monochromacy/Achromatopsia except for black, white and grey, the site is still visually appealing through the use of contrast between darker and lighter colours and the shadow effect used on the question mark illustration, the quiz question boxes and the Rules/Create Username boxes. 

## Features
### Existing Features
#### Home Page

The Home page is designed to quickly give the user access to what they are likely to want to know before starting the quiz and encourage them to go on to start the quiz.

* **Central Question Mark Illustration**  

  The question mark illustration provides a focal point when arriving at the Home page and provides imagery synonymous with questions and quizzes, fitting in with the theme of the website. It also rotates one full turn clockwise and then counterclockwise on page load to add to the user interest but then stops to avoid distracting the user whilst they read the rules/complete the 'create username' form. 

* **Navigation Bar** 

  The navigation bar is simple and easy to use. It only features the Home page and Quiz page with the words 'Home' and 'Quiz' which are self-explanatory. It does not feature the Results page as the user needs to complete the quiz before going through to the results page, otherwise the user could access an unsightly page with blanks in it. It enables a user to quickly click through to start the quiz if they do not want to read the Home page and to play the quiz again if they do not want to read their results. The developer found it preferable to make the footer sticky (for reasons set out below) rather than the header given that the user is unlikely to want to get back to the Home page once they have visited it and can access the Quiz page at the bottom of the Home page (via the 'Start Quiz' button) and the Results page (via the 'Play Again!' button) without having to scroll back up to the navigation bar in any case.

  An Indian Red coloured line remains under the relevant page name when the user is on that page, so that the user can tell at a glance where they are on the website. A Light Cyan coloured line appears under the relevant page name when the user hovers over it with a mouse or focusses on it with a keyboard, hightlighting an action the user can take to get to the other page.  

* **Rules and Create Username Buttons**

  The Home page contains toggle buttons which allow the user to show and hide the quiz rules and the create username form. The toggle buttons allow the Home page to maintain a neat appearance when they are not being used but easily hint to the user what they will reveal if clicked. The Rules button allows the user to read the rules and the score categories and provides the user with useful information such how many quizzes are available before beginning. The username form allows the user to create a username which will be used to personalise the results page for that user's session.  

* **Footer**

  The footer contains links to external useful websites for the user to write their own quiz or gain tips on how to improve their general knowledge. Each link has a relevant logo and wording to highlight what the links are for. As with the page navigation links in the header, a Light Cyan underline appears when the links are hovered over or focussed on. This gives the user a sense of predictable interaction. 

  The footer is sticky only on the Home page and Results page. These are the pages where a user is likely to want to look to access these links e.g. before completing the quiz the user may want to improve their general knowledge and after completing the quiz, the user may be inspired to write their own quiz. As the Home and Results pages contain minimal information, the sticky footer is not a hindrance to the user. The footer is not sticky on the Quiz page because this would take up screen space whilst the user is scrolling down to complete the quiz, which could irritate the user. The Quiz page is also the page where the user is least likely to want to explore the external links as well as being the page where the developer most wants the user to remain on the site.

#### Quiz Page

This page represents the main goal of the user in completing a multiple choice quiz. 

* **Presentation of Quiz Questions**

  Each quiz question apppears in a self-contained Dark Cyan rectangle which contains the question, answers and a photo which is either specifically relevant to the question (in which case it may help the user, for example, in the 'Fish or Not' round) or is relevant to the round theme, providing attractive imagery to accompany the user's quiz experience. The radio buttons next to the answer text indicate when an answer has been selected and the user also receives feedback on which answer they have selected as the answer font changes from Raleway to Slackey. The developer decided to keep in the radio buttons as they are something users will be familiar with and they allow the user to easily distinguish between when they are focussing on an answer with the keyboard as opposed to selecting a radio button. Removing the radio buttons and adding something like a coloured outline to the answer divs to indicate that the user is focussing on that div creates confusion as the user will not know which of the outline and answer font change represents answer selection and which represents answer focus.

* **Round Submission**

  The user is able to gain feedback on how they are doing during the quiz by submitting each round, maintaining the user's interest. If the user tries to submit a round without answering all the questions they will be prompted to do so. Once a user submits a round, the submit button and radio buttons are disabled so that the user cannot re-submit. The submit button changes to grey colours and the radio buttons are also greyed out. The user is provided with a 'Correct!' or 'Incorrect!' message underneath the question photo so they can instantly tell if they got the question right or wrong. Ticks and crosses also appear underneath each answer in case the user got it wrong and wants to see what the correct answer was. The ticks and 'Correct!' message are all in Green, a colour synonymous with something being correct and the crosses and 'Incorrect!' message are all in Red, again a colour synonymous with something being incorrect. 

* **Getting the Quiz Results**

  At the bottom of the Quiz page is the 'Get Quiz Results' button which is a different colour to and larger than the round submit buttons. If the user tries to get their Quiz Results before they have submitted all 5 rounds they will be prompted to submit all 5 rounds and can only progress to getting their Results when they do. The Quiz also keeps a record of which quizzes the user has completed in the same session so the user will not get the same quiz twice. Once the user clicks on 'Get Quiz Results' after completing their fifth quiz, they will receive an alert to tell them that they have completed all 5 quizzes. The record of quizzes completed then resets to none to allow the user to do the quizzes all over again, if they so choose, without receiving an alert each time. 


#### Results Page

The Results page is designed to provide the user with some more interesting user results than just the user's total score and encourage the user to play another quiz.

* **Central Image**

  As with the Home page, the Results page has a central illustration image with pastel colouring. Only the Home page and Results page have illustrations with the Quiz page having photos. This links the Home and Results pages and brings the user's experience full circle, as does the similar layout for these two pages mentioned in the 'Page Designs' section above. The clipboard image with ticks fits in with the results theme of the 'Results' page. 

* **Score Category and Bracket**

  The user will receive a score bracket and a score name which matches the score brackets, names and colours set out in the Quiz Rules on the Home page. This provides the user with some information but they will want to know their exact score so will want to keep scrolling to find out. If the user has entered a username, their name will appear before 'You Are' in the score category and bracket area to personalise the user experience. If the user completes more than one quiz in a session and doesn't return to the Home page to set another username, the same username will appear on their Results page each time a quiz is completed, maintaining the personalisation. 

* **Score and Best Round(s)**

  The user will receive their total score as well as information about their best round(s). For each Round where the user had their highest score they will be given the name of the Round(s) as well as their score out of 3 in those Round(s). This provides some added interest for the user in giving them feedback about which category is or categories are their strongest. They will be able to see a pattern if they complete more than one quiz so this is designed to encourage the user to play again.  

* **Playing the Quiz Again**

  The 'Play Again!' button provides a call to action for the user to complete another quiz and is styled in the same way as the 'Get Quiz Results' button so the user will be familiar with this button as one that will take them to another page. Above the button is a message to remind the user that there are five quizzes to play in total. The button also provides an easy way for the user to play a quiz again without having to scroll back up to the header navigation bar. 

### Further Feature Ideas
* Adjust the site so that only one round appears on the Quiz page at a time.
* Store the user's best round(s) over all the quizzes they complete in a session to provide them with their overall strongest round category.
* Add a dark mode for the site. 
    
## Technologies Used

### Languages 
* [HTML5](https://en.wikipedia.org/wiki/HTML5) programming language for the structure and content of the website.
* [CSS3](https://en.wikipedia.org/wiki/CSS) for styling the look of the website.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for adding interactivity to the website. 

### Libraries, Resources and Programs
* [Git](https://git-scm.com/) was the version control system used via the Gitpod terminal to commit and push code to GitHub.
* [GitHub](https://github.com/) was the git repository hosting service used to store code pushed from Git and to deploy the website live on the internet.
* [Gitpod](https://www.gitpod.io/) was the online IDE (Integrated Development Environment)/editor used to create, modify and preview the project code. 
* [Google Fonts](https://fonts.google.com/) was used to import all of the fonts used on the website into the style.css file. 
* [Font Awesome](https://fontawesome.com/) was used to provide all the icons throughout the site.  
* [Balsamiq](https://www.balsamiq.com) was used to prepare all of the Wireframes for the site. 
* [Chrome DevTools](https://developer.chrome.com/docs/devtools/) was used to inspect the project code throughout creation of the site. 
* [ColorSpace](https://mycolor.space/) was used to generate the colour palettes from which most of the colours for the website were taken. 
* [Eye Dropper](https://eyedropper.org/) was used to find out the names of the hex code colours used on the site and to find the hex code of the Teal colour used for the header (which was picked using the dropper on a website). 
* [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/), a colour blindness simulator, was used to test the website colour palette to make sure that the choice of colours and contrasts would still be visually appealing to people with different types of colour blindness. 
* [Favicon Generator](https://favicon.io/favicon-generator/) was used to create the favicon for the site. 
* [This article](https://www.shiftelearning.com/blog/how-do-colors-influence-learning) about how colours influence learning was used to pick an initial colour scheme for the site. 
* [Am I Responsive?](http://ami.responsivedesign.is/) was used to create the screenshots showing how the website looks on different device types. 
* [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), [Pixabay](https://pixabay.com/) and [Rawpixel](https://www.rawpixel.com/?sort=shuffle&page=1&feed=creative-feed) provided free photos and images used throughout the site.
* [W3 Schools](https://www.w3schools.com/), [Stack Overflow](https://stackoverflow.com/), [CSS-Tricks](https://css-tricks.com/) and [MDN Web Docs](https://developer.mozilla.org/en-US/) were used for general guidance and learning.  
* [YesViz](https://yesviz.com/viewport/) and [Screen Size Map](https://screensizemap.com/) were used for awareness of the viewport sizes of different device screens for responsive design purposes and [What is my Viewport?](https://whatismyviewport.com/) was used to confirm the viewport screen sizes of my devices for testing the project. 
* [Can I Use?](https://caniuse.com/) was used for checking browser compatibility.
* [Compressor](https://compressor.io/) and [TinyPNG](https://tinypng.com/) were used for compressing photos used on the site. 
* [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) was used to check the contrast of foreground text colours against their background colours.
* [Lighthouse reports](https://developers.google.com/web/tools/lighthouse) were run on all the pages of the live site within the Chrome browser.   
* [The W3C Markup Validation Service](https://validator.w3.org/), [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/) were used for testing the html, css and javascript code for the site.
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) were used for preparing the README.md and TESTING.md files.

## Testing

Please see the separate [TESTING.md file](TESTING.md) for details of the project testing carried out. 

## Deployment

### GitHub Pages

This project was deployed to GitHub Pages according to the following steps: 

1. Log in to GitHub.
2. Navigate to the repository that you want to deploy (in the case of this project this is lhartley870/taking-care-of-quizness).
3. At the top of the repository locate the 'Settings button' and click on it. 
4. Down the left hand side of the page there is an option for 'Pages'. Click on that. 
5. Underneath where it says 'Source' there is a dropdown menu which allows you to select a branch of 'master' or 'none'. Select master. 
6. Next to the dropdown menu which allows you to select a branch, there is a dropdown menu which allows you to select a folder of '/(root)' or '/docs'. Ensure that '/(root)' is selected.
6. Click save. 
7. GitHub will then tell you that the site is ready to be published. 
8. Refresh the site and GitHub will tell you that your site is published and provide a link to the live site. It will look like this:

![View of GitHub Pages when site deployed](/readme-documents/screenshots/github-pages-screenshot.png)

### Forking the GitHub Repository

Forking the GitHub repository allows you to produce a personal copy of the original repository/someone else's project that you can amend without affecting the original repository. To do this:

1. Log in to GitHub.
2. Navigate to the repository that you want to fork. 
3. In the repository header locate the button that says 'Fork' and click on it.  
4. When the repository is copied you will be taken to your copy of the repository. 

### Making a Local Clone

In order to work on a repository you have forked, you will need to clone it to your computer. In order to do this: 

1. Log in to GitHub and locate the repository fork you want to make a local clone of. 
2. Underneath the Settings button at the top of the repository there is a button with a dropdown arrow that says 'Code'. Click on it.  
3. To clone the repository using HTTPS, undeneath 'Clone' select 'HTTPS' so that there is an orange line underneath 'HTTPS'. Click on this button:

![View of local clone button](/readme-documents/screenshots/local-clone-button.png)

4. Open the Terminal in your IDE/editor. 
5. Change the current working directory to the one where you want the cloned directory to be located.  
6. Type 'git clone' and then paste the URL you copied earlier. It will look like this with your username instead of 'YOUR-USERNAME' and the name of the forked repository you are cloning instead of 'NAME OF REPOSITORY YOU ARE CLONING': 

![View of terminal command to clone fork](/readme-documents/screenshots/clone-command.png)

7. Press enter and your local clone will be created. 

For more information on forking and cloning repositories, see [GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and this [GitHub Guide](https://guides.github.com/activities/forking/). 

## Credits 

### Code

* Code for styling an active page with a coloured underline on the Home and Quiz pages was taken from Code Institute's Love Running project as well as the html structure for the footer external links.
* Link tag code for the favicon to display in the deployed project in the html pages taken from the Code Institute Love Maths project.
* The CSS code to set a minimum, preferred and maximum header size was adapted from an answer given by lawrence-witt on [this Stack Overflow post](https://stackoverflow.com/questions/38078957/can-we-define-min-margin-and-max-margin-max-padding-and-min-padding-in-css/38079002).
* The CSS code for the question mark rotation animation was adapted from [this Flavioscopes website](https://flaviocopes.com/rotate-image/) using [a W3 Schools CSS Animation tutorial](https://www.w3schools.com/css/css3_animations.asp). 
* The CSS code to change the label styling for checked radio buttons was taken from an answer given by Gerben Versluis on [this Stack Overflow post](https://stackoverflow.com/questions/18078871/hide-check-radio-button-with-css). 
* The solution in the CSS file for creating space between table columns found at [this W3 Docs website](https://www.w3docs.com/snippets/css/how-to-create-space-between-rows-in-the-table.html). 
* The CSS Code for increasing the size of the radio buttons was taken from an answer given by Manish Patel on [this Stack Overflow post](https://stackoverflow.com/questions/4516217/make-radio-button-bigger). 
* The first function in each of the JavaScript files was largely adapted from Code Institute's Love Maths project.
* Code for how to pass variables (including array variables) to and from session storage in the JavaScript files was taken from [this website](https://lage.us/Javascript-Pass-Variables-to-Another-Page.html).
* The code for generating a random quiz set between 1 and 5 appearing in the selectQuizNumber function in the JavaScript file for the Quiz page was adapted from the Code Institute Love Maths project.

### Media

#### Illustrations

With thanks, the following illustrations appearing on the website are from [Rawpixel](https://www.rawpixel.com/?sort=shuffle&page=1&feed=creative-feed) and were done by the following illustrators:
* The [question mark illustration](https://www.rawpixel.com/image/2626540/free-illustration-vector-question-mark) appearing on the Home page is by Ning.
* The [photo of a clipboard illustration](https://www.rawpixel.com/image/402495/free-photo-image-checklist-check-list) appearing on the Results page has no photographer identity but the [illustration appearing in the photo](https://www.rawpixel.com/image/429454/free-illustration-vector-checklist-clipboard-check-list) is by Minty. 

#### Photos

With thanks, the photos appearing on the Quiz page were taken by the following photographers: 

* From [Unsplash](https://unsplash.com/):
    * Round 1 (Movie Quotes): 
      * Quiz 1:
        * [Central cinema photo](https://unsplash.com/photos/atsUqIm3wxo) by Myke Simon
        * [Clapperboard and popcorn photo](https://unsplash.com/photos/q8P8YoR6erg) by GR Stocks
        * [Cinemagoers photo](https://unsplash.com/photos/4VDRCoNuvE0) by Felipe Bustillo
      * Quiz 2:
        * [Hollywood sign photo](https://unsplash.com/photos/aNrRsB2wLDk) by Ahmet Yalcinkaya
        * [Popcorn cones photo](https://unsplash.com/photos/Bz-eN8FoVPE) by Maiken Ingvordsen
      * Quiz 3: 
        * [Hollywood clapperboard photo](https://unsplash.com/photos/oQNXWjBNSyk) by Thea Hdc
        * [Beach outdoor cinema photo](https://unsplash.com/photos/XO4A1pWBEbE) by Zhifei Zhou
        * [Red film reel photo](https://unsplash.com/photos/tV80374iytg) by Denise Jans
      * Quiz 4:
        * [Cinema sign crafted into ironwork photo](https://unsplash.com/photos/61LcmrqKMEw) by Nick Fewings
      * Quiz 5:
        * [Cinema full of people photo](https://unsplash.com/photos/AtPWnYNDJnM) by Krists Luhaers
    * Round 2 (Nature): 
      * Quiz 1:
        * [Cows photo](https://unsplash.com/photos/HHpRh6rNQMo) by Lomig
        * [Chimpanzee photo](https://unsplash.com/photos/O4A-zGH8u-Y) by Francesco Ungaro
        * [Blue ringed octopus photo](https://unsplash.com/photos/tFBjYVy9CwQ) by Kris Mikael Krister
      * Quiz 2: 
        * [Whale tail photo](https://unsplash.com/photos/9JrBiphz0e0) by Abigail Lynn
        * [Wolves photo](https://unsplash.com/photos/e9hbo4NtKJ0) by Eva Blue
        * [Lion photo](https://unsplash.com/photos/U2XoCezbP_o) by Joshua Hoehne
      * Quiz 3: 
        * [Human lips photo](https://unsplash.com/photos/UGFkfsj-4z4) by Rafael Rocha
        * [Dream photo](https://unsplash.com/photos/zi1GRsLym3s) by Sharon McCutcheon
        * [Sloth photo](https://unsplash.com/photos/GTXvpZ2eTdA) by Javier Mazzeo
      * Quiz 4:
        * [Volcano photo](https://unsplash.com/photos/tLxGw_ITs7k) by Alain Bonnardeaux
        * [Turkey photo](https://unsplash.com/photos/ELYK2KyiEJ4) by Randy Fath
        * [Echidna photo](https://unsplash.com/photos/NIAqWo0-nSg) by Emmanuel Higgins
      * Quiz 5: 
        * [Dogs photo](https://unsplash.com/photos/qy0BHykaq0E) by Karsten Winegeart
        * [Lemurs photo](https://unsplash.com/photos/FWA4Zk1hFls) by Victoria Bragg
        * [Lightning photo](https://unsplash.com/photos/vmvlzJz1lHg) by Sean McAuliffe
    * Round 3 (Music): 
      * Quiz 1:
        * [Radio photo](https://unsplash.com/photos/8e0EHPUx3Mo) by Eric Nopanen
        * [Headphones photo](https://unsplash.com/photos/PDX_a_82obo) by C D-X
        * [Lead singer photo](https://unsplash.com/photos/hgO1wFPXl3I) by Austin Neill
      * Quiz 2: 
        * [Rose photo](https://unsplash.com/photos/Y7iHt3LRWGg) by Kelly Sikkema
        * [Concert photo](https://unsplash.com/photos/NcdG9mK3PBY) by Nainoa Shizuru
        * [Female listening to music](https://unsplash.com/photos/DBGwy7s3QY0) by Bruce Mars
      * Quiz 3: 
        * [Microphone photo](https://unsplash.com/photos/Y20JJ_ddy9M) by Israel Palacio
        * [Cassette tape photo](https://unsplash.com/photos/mbGxz7pt0jM) by Daniel Schludi
        * [You are what you listen to neon sign photo](https://unsplash.com/photos/1oKxSKSOowE) by Mohammad Metri
      * Quiz 4: 
        * [Guitar on fire photo](https://unsplash.com/photos/JmVaNyemtN8) by Dark Rider
        * [Mobile phone playing music against turquoise background photo](https://unsplash.com/photos/HU-uL54pfQI) by Juja Han
        * [Apple music 3d icon photo](https://unsplash.com/photos/qt7S2QuAhJI) by Alexander Shatov
      * Quiz 5: 
        * [DJ decks photo](https://unsplash.com/photos/YrtFlrLo2DQ) by Marcela Laskoski
        * [Vinyl record photo](https://unsplash.com/photos/LUMT0EeNnjE) by Steve Harvey
        * [Guitars photo](https://unsplash.com/photos/E8M4dlfz0Q4) by Markus Spiske 
    * Round 4 (True or False):
      * Quiz 1:
        * [Pirate ship photo](https://unsplash.com/photos/mG_rp41aYqM) by Alonso Reyes
        * [Hummingbird photo](https://unsplash.com/photos/nCtcu1s2BOs) by Bryan Hanson
        * [Baby feet photo](https://unsplash.com/photos/kd3qRzgEl70) by Picsea
      * Quiz 2: 
        * [Basketball photo](https://unsplash.com/photos/BfphcCvhl6E) by Markus Spiske
        * [Green eyes photo](https://unsplash.com/photos/wARfRSUEjKE) by Abolfazl Eslami
        * [Cigarette photo](https://unsplash.com/photos/ryBnRg4c3L0) by Andres Siimon
      * Quiz 3: 
        * [Bee photo](https://unsplash.com/photos/Xd-DRy9jJMc) by Dustin Humes
      * Quiz 4: 
        * [Hammock photo](https://unsplash.com/photos/cTfcPsRQv4Q) by Urip Dunker
        * [Money photo](https://unsplash.com/photos/qydUw3DanPU) by rupixen.com
        * [Meditation photo](https://unsplash.com/photos/rOn57CBgyMo) by Benjamin Child
      * Quiz 5: 
        * [Chilli photo](https://unsplash.com/photos/wv6dmRTgWdE) by Albert Vincent Wu
        * [White rabbit photo](https://unsplash.com/photos/p2UbTX6Uoig) by Janan Lagerwall
        * [Great white shark photo](https://unsplash.com/photos/B2YtN52DdAA) by Gerald Sch??mbs
    * Round 5 (Fish or Not a Fish):
      * Quiz 1:
        * [Catfish photo](https://unsplash.com/photos/uWLvruHp8kY) by Milos Prelevic
        * [Cuttlefish photo](https://unsplash.com/photos/DcitvRh5n18) by Francis Nie
        * [Jellyfish photo](https://unsplash.com/photos/JtVyK2Sej2I) by Jeffrey Hamilton
      * Quiz 2: 
        * [Lionfish photo](https://unsplash.com/photos/iFKMVFKY03c) by Wai Siew
        * [Crayfish photo](https://unsplash.com/photos/gQafD9SJgYg) by Richard Burlton
      * Quiz 3: 
        * [Stonefish photo](https://unsplash.com/photos/ukO5F8iivGs) by David Clode
        * [Manta ray photo](https://unsplash.com/photos/zIItQygX540) by Max Gotts
        * [Starfish photo](https://unsplash.com/photos/br-Xdb9KE0Q) by Pedro Lastra
      * Quiz 4: 
        * [Seahorse photo](https://unsplash.com/photos/EWdzB29U0bo) by Paul Hewart
        * [Sea snake photo](https://unsplash.com/photos/zrFVG_8Xjh8) by Jong Marshes
      * Quiz 5: 
        * [Eel photo](https://unsplash.com/photos/yBraeHiDXi8) by David Clode
        * [Octopus photo](https://unsplash.com/photos/i54owgDjXeY) by Isabel Galvez 
        * [Whale shark photo](https://unsplash.com/photos/Abj_zUko6Mg) by Sebastian Pena Lambarri

* From [Pexels](https://www.pexels.com/): 
  * Round 1 (Movie Quotes):
    * Quiz 2:
      * [Colosseum cinema photo](https://www.pexels.com/photo/black-and-red-samsung-galaxy-smartphone-1790556/) by Paul Volkmer 
    * Quiz 4: 
      * [Black film reel photo](https://www.pexels.com/photo/abstract-analog-art-camera-390089/) by Skitterphoto
      * [Netflix photo](https://www.pexels.com/photo/netflix-on-an-imac-5082582/) by Cottonbro

* From [Pixabay](https://pixabay.com/):
  * Round 1 (Movie Quotes):
    * Quiz 5:
      * [Movie tickets in popcorn photo](https://pixabay.com/photos/popcorn-food-film-ticket-5663525/) by Pablo Jimeno
      * [Alfred Hitchcock star, Hollywood walk of fame photo](https://pixabay.com/photos/walk-of-fame-los-angeles-hollywood-2163255/) by Tuende Bede 
  * Round 4 (True or False):
    * Quiz 3: 
      * [Platypus photo](https://pixabay.com/photos/platypus-monotreme-mammal-3762257/) by pen_ash (Penny)
      * [Armadillo photo](https://pixabay.com/photos/armadillo-mammal-nature-fauna-3620078/) by K McCall
  * Round 5 (Fish or Not a Fish):
    * Quiz 2: 
      * [Mussels photo](https://pixabay.com/photos/mussels-shellfish-black-seafood-1665863/) by Joyce May 
    * Quiz 4:
      * [Sea urchin photo](https://pixabay.com/photos/sea-%e2%80%8b%e2%80%8burchin-wood-purple-1536812/) by timvb1990
      
### Content

* The website title and the quiz score category name of Risky Quizness were taken from the 'Picked by the Host' section of [this website](https://quizcoconut.co.uk/100-quiz-team-names-ideas). The quiz score category names of Les Quizerables and The Quizard of Oz were taken from the 'Film Related Team Names' section of the same website. 
* Some of the questions were taken from the [Cambridge News website](https://www.cambridge-news.co.uk/news/uk-world-news/20-science-nature-quiz-questions-18142780), the [Aha Slides website](https://ahaslides.com/blog/125-questions-and-answers-pop-music-quiz-premade-free-software/) and the [My London News website](https://www.mylondon.news/whats-on/20-animal-quiz-questions-answers-18155363). 
* Some of the questions were created from facts on the [Nectar Sleep website](https://www.nectarsleep.com/posts/fun-facts-about-the-human-body/), the [Best Life Online website](https://bestlifeonline.com/facts-about-natures-wonders/), the [Fun Kids Live website](https://www.funkidslive.com/learn/top-10-facts/top-10-facts-about-volcanoes/), the [Conserve Energy Future website](https://www.conserve-energy-future.com/weather-facts.php) and the [Pubity Facts Instagram page](https://www.instagram.com/pubityfacts/?hl=en). 
* The round theme of 'Fish or Not' and the questions in that round were taken from [this Jet Punk website](https://www.jetpunk.com/user-quizzes/154362/fish-or-not-a-fish). 
* This [Code Institute sample README file](https://github.com/Code-Institute-Solutions/SampleREADME) was used for guidance in preparing this README file and for the Deployment section along with this [GitHub Docs guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and this [GitHub Guide](https://guides.github.com/activities/forking/). 

### Acknowledgments

Many thanks to:
* My mentor, Gerard McBride, for his help and guidance.
* The Code Institute tutors for their support. 

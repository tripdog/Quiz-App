# Kids Quiz Game
## Vanilla JS & CSS Grid

This goal of this project was to create a quiz game for my son using 
Vanilla JS and CSS Grid.

![alt text](https://github.com/tripdog/Quiz-App/blob/master/img/quiz.jpg?raw=true)

**JavaScript**
I knew I wanted to create an object with the questions and answers 
inside of it so that I could accessthem later to match the correct 
answer with the question. Another major factor was to dynamically
create the questions with JavaScript. I achieved this using a forEach 
loop that loops through individual object(each question is its own object),
in order to pull data from the object and assign it to its respective
html element. This builds and formats each question.

Matching the correct answer to each question was a bit more tricky and
it too is inside the forEach loop mentioned above but it uses it's own
forEach to loop over the radio button inputs to see if any of them are
check and then to see which one is checked. It is then compared to the 
answer inside of the object to determine if the answer is correct.

A running tally is used to keep score and there are options to replay
or end the game.

**CSS Grid**
I usually use FlexBox so I wanted to do a little challenge with this
layout by using only CSS Grid. I find that Grid feels much like 
FlexBox but with some added features. 

**Improvements**
Now that the basics of the game are working and the layout is wrapping
when the browser window closes down, there are a few enhancements I want
to make. 1. Add more questions and randomize them when the user hits the
replay button. 2. There is actually much more work to be done in order
to make the quiz game fully responsive. 


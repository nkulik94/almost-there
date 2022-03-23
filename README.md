# Meet the Kuliks

I did it!

I have successfully built my first website, and while it's hardly very sophisticated I am quite proud of it, given my lack of experience. Working on the code for the memory game was incredibly difficult at times, as I seemed to run into problems with every step. I'm glad I stuck with it, because it helped me gain a more intuitive understanding of how JavaScript works than I could have gotten from just learning and practicing alone.

Here's a brief explanation about how everything works:
The main page is simple HTML and CSS, styled how I thought it looked best with the resources and knowledge at my disposal. Although there is a script file linked to the HTML document, it is empty as I have chosen not to make this page interactive, at least for now.

Now for the memory game. There is one script file, linked to index.html, that contains all of the code that makes the game work. A click event listener is activated on each of the cards, which, when clicked, will have its src attribute changed to the corresponding index of an array that contains the paths to other pictures, the "other side" of the cards, twice each. The contents of this array are shuffled with a Fisher-Yates shuffle (a convenient bit of code I found online) every time the window is loaded, so that the layout of the game board is never the same. Clicking on the card will also push that card's element into a seperate array (checkMatch), which accomplishes two things. Firstly, the code in the click event listener is only executed if checkMatch.length is less than 2, thereby preventing more than two cards at a time from being flipped. Secondly, when checkMatch.length does get to two, a message is displayed which varies depending on whether or not the cards match. Included in the message is a button that, when clicked, either removes (makes invisible) the selected cards (if they match) or resets the src attribute to display the back of the cards (if they don't). Regardless of whether or not the cards match, clicking the button will empty the checkMatch array and remove the message so that the game can be continued.

Online matching games are definitely not a new concept, and most (all?) of them look and work better than this one. However, as someone with no experience in coding yet other than Flatiron School prework, I am quite proud of the fact that I was able to write this code from scratch, solely based on the resources available to me at this time. The code is all mine (other than the Fisher-Yates shuffle), based on my own painstaking (and at times discouraging) experiments with the code that I've learned. It'll hardly be my greatest accomplishment as a developer, but it's my first, and that matters.

This may not be typical README content, but it's what I feel should be shared about this particular project. Enjoy!

Naftali Kulik
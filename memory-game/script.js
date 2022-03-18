const lineOne = document.getElementsByClassName('line-1');
const lineTwo = document.getElementsByClassName('line-2');
const lineThree = document.getElementsByClassName('line-3');
const lineFour = document.getElementsByClassName('line-4');
const messageContainer = document.getElementById('message-container')
const message = document.getElementById('message');
const button = document.getElementById('button');
const logoPath = './card-logo.jpg'
const logo = 'card-logo.jpg'
// This is the array that contains the path for the flip side of the cards
const picsArray = ['./pics/chavi-elchonon-wagon.jpg', './pics/chavi-elchonon-wagon.jpg', './pics/elchonon-keyboard.jpg', './pics/elchonon-keyboard.jpg', './pics/elchonon-snowman.jpg', './pics/elchonon-snowman.jpg', './pics/family-lancaster.jpg', './pics/family-lancaster.jpg', './pics/kids-costumes.jpg', './pics/kids-costumes.jpg', './pics/kids-ice-cream.jpg', './pics/kids-ice-cream.jpg', './pics/kids-reading.jpg', './pics/kids-reading.jpg', './pics/kids-store.jpg', './pics/kids-store.jpg', './pics/me-mordy-dentist.jpg', './pics/me-mordy-dentist.jpg', './pics/mordy-cabinet.jpg', './pics/mordy-cabinet.jpg', './pics/mordy-laundry.jpg', './pics/mordy-laundry.jpg', './pics/mordy-toolset.jpg', './pics/mordy-toolset.jpg']
// flipped cards will be added to this array to check if they match
const checkMatch = []
// Fisher-Yates shuffle to shuffle the cards. I'm still not sure how it works but it does
window.addEventListener('load', function() {
  for (let i = picsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = picsArray[i];
    picsArray[i] = picsArray[j];
    picsArray[j] = temp;
  }
});
// hides match result message until needed
messageContainer.style.display = 'none'
// Event listener to flip cards when clicked, check for match, and display appropriate message
function flipCards(line, i, n) {
  line[i].addEventListener('click', function() {
    if (checkMatch.length < 2) { if (line[i].getAttribute('src') === logo) {
        line[i].setAttribute('src', picsArray[n]);
        checkMatch.push(line[i]);
    }};
    if (checkMatch.length === 2) {
      if (checkMatch[0].getAttribute('src') === checkMatch[1].getAttribute('src')) {
        message.textContent = 'You got a match!'
        messageContainer.style.left = '37.2%'
        messageContainer.style.top = '42%'
        messageContainer.style.display = ""
      } else {
        message.textContent = "Aww, try again"
        messageContainer.style.left = '38.5%'
        messageContainer.style.top = '42.5%'
        messageContainer.style.display = ''
      }
    }
  })
}
// Event listener to hide message, hide matched cards, and continue game when button is clicked
function buttonClick() {
    document.getElementById('button').addEventListener('click', function() {
      if (checkMatch.length === 2) {
        if (checkMatch[0].getAttribute('src') === checkMatch[1].getAttribute('src')) {
          checkMatch[0].style.visibility = 'hidden';
          checkMatch[1].style.visibility = 'hidden';
        } else if (checkMatch[0].getAttribute('src') !== checkMatch[1].getAttribute('src')) {
          checkMatch[0].setAttribute('src', logo);
          checkMatch[1].setAttribute('src', logo);
        };
        messageContainer.style.display = 'none';
        message.textContent = ''
        checkMatch.pop();
        checkMatch.pop();
      }
    })
}
// function to start game by calling flipCard function on all of the cards and calling buttonClick function
function startGame() {
  flipCards(lineOne, 0, 0);
  flipCards(lineOne, 1, 1);
  flipCards(lineOne, 2, 2);
  flipCards(lineOne, 3, 3);
  flipCards(lineOne, 4, 4);
  flipCards(lineOne, 5, 5);
  flipCards(lineTwo, 0, 6);
  flipCards(lineTwo, 1, 7);
  flipCards(lineTwo, 2, 8);
  flipCards(lineTwo, 3, 9);
  flipCards(lineTwo, 4, 10);
  flipCards(lineTwo, 5, 11);
  flipCards(lineThree, 0, 12);
  flipCards(lineThree, 1, 13);
  flipCards(lineThree, 2, 14);
  flipCards(lineThree, 3, 15);
  flipCards(lineThree, 4, 16);
  flipCards(lineThree, 5, 17);
  flipCards(lineFour, 0, 18);
  flipCards(lineFour, 1, 19);
  flipCards(lineFour, 2, 20);
  flipCards(lineFour, 3, 21);
  flipCards(lineFour, 4, 22);
  flipCards(lineFour, 5, 23);
  buttonClick()
}
startGame();
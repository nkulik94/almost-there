const lineOne = document.getElementsByClassName('line-1');
const lineTwo = document.getElementsByClassName('line-2');
const lineThree = document.getElementsByClassName('line-3');
const lineFour = document.getElementsByClassName('line-4');
const button = document.getElementById('button')
const logoPath = './card-logo.jpg'
const logo = 'card-logo.jpg'
// This is the array that contains the path for the flip side of the cards
const picsArray = ['./pics/chavi-elchonon-wagon.jpg', './pics/chavi-elchonon-wagon.jpg', './pics/elchonon-keyboard.jpg', '/pics/elchonon-keyboard.jpg', './pics/elchonon-snowman.jpg', './pics/elchonon-snowman.jpg', './pics/family-lancaster.jpg', './pics/family-lancaster.jpg', './pics/kids-costumes.jpg', './pics/kids-costumes.jpg', './pics/kids-ice-cream.jpg', './pics/kids-ice-cream.jpg', './pics/kids-reading.jpg', './pics/kids-reading.jpg', './pics/kids-store.jpg', './pics/kids-store.jpg', './pics/me-mordy-dentist.jpg', './pics/me-mordy-dentist.jpg', './pics/mordy-cabinet.jpg', './pics/mordy-cabinet.jpg', './pics/mordy-laundry.jpg', './pics/mordy-laundry.jpg', './pics/mordy-toolset.jpg', './pics/mordy-toolset.jpg']
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
})
  // flips second card
  function nextStep() {
    function secondClick(line2, i2, n2) {
      line2[i2].addEventListener('click', function() {
        if (checkMatch.length < 70) {
          line2[i2].setAttribute('src', picsArray[n2]);
          checkMatch.push(line2[i2]);
        }
      })
    }
    if (lineOne[0] !== checkMatch[0]) {
      secondClick(lineOne, 0, 0)
    }
    if (lineOne[1] !== checkMatch[0]) {
      secondClick(lineOne, 1, 1)
    }
    if (lineOne[2] !== checkMatch[0]) {
      secondClick(lineOne, 2, 2)
    }
    if (lineOne[3] !== checkMatch[0]) {
      secondClick(lineOne, 3, 3)
    }
    if (lineOne[4] !== checkMatch[0]) {
      secondClick(lineOne, 4, 4)
    }
    if (lineOne[5] !== checkMatch[0]) {
      secondClick(lineOne, 5, 5)
    }
    if (lineTwo[0] !== checkMatch[0]) {
      secondClick(lineTwo, 0, 0)
    }
    if (lineTwo[1] !== checkMatch[0]) {
      secondClick(lineTwo, 1, 1)
    }
    if (lineTwo[2] !== checkMatch[0]) {
      secondClick(lineTwo, 2, 2)
    }
    if (lineTwo[3] !== checkMatch[0]) {
      secondClick(lineTwo, 3, 3)
    }
    if (lineTwo[4] !== checkMatch[0]) {
      secondClick(lineTwo, 4, 4)
    }
    if (lineTwo[5] !== checkMatch[0]) {
      secondClick(lineTwo, 5, 5)
    }
    if (lineThree[0] !== checkMatch[0]) {
      secondClick(lineThree, 0, 0)
    }
    if (lineThree[1] !== checkMatch[0]) {
      secondClick(lineThree, 1, 1)
    }
    if (lineThree[2] !== checkMatch[0]) {
      secondClick(lineThree, 2, 2)
    }
    if (lineThree[3] !== checkMatch[0]) {
      secondClick(lineThree, 3, 3)
    }
    if (lineThree[4] !== checkMatch[0]) {
      secondClick(lineThree, 4, 4)
    }
    if (lineThree[5] !== checkMatch[0]) {
      secondClick(lineThree, 5, 5)
    }
    if (lineFour[0] !== checkMatch[0]) {
      secondClick(lineFour, 0, 0)
    }
    if (lineFour[1] !== checkMatch[0]) {
      secondClick(lineFour, 1, 1)
    }
    if (lineFour[2] !== checkMatch[0]) {
      secondClick(lineFour, 2, 2)
    }
    if (lineFour[3] !== checkMatch[0]) {
      secondClick(lineFour, 3, 3)
    }
    if (lineFour[4] !== checkMatch[0]) {
      secondClick(lineFour, 4, 4)
    }
    if (lineFour[5] !== checkMatch[0]) {
      secondClick(lineFour, 5, 5)
    }
  }

  // flips the first card
  function firstClick(line1, i1, n1) {
    line1[i1].addEventListener('click', function() {
      if (checkMatch.length === 0) {
        line1[i1].setAttribute('src', picsArray[n1]);
        checkMatch.push(line1[i1]);
        nextStep()
      }
    })
  }
  function startGame() {
    if (lineOne[0].getAttribute('src') === logo) {
  firstClick(lineOne, 0, 0);
    }
    if (lineOne[1].getAttribute('src') === logo) {
  firstClick(lineOne, 1, 1);
    }
    if (lineOne[2].getAttribute('src') === logo) {
  firstClick(lineOne, 2, 2);
    }
    if (lineOne[3].getAttribute('src') === logo) {
  firstClick(lineOne, 3, 3);
    }
    if (lineOne[4].getAttribute('src') === logo) {
  firstClick(lineOne, 4, 4);
    }
    if (lineOne[5].getAttribute('src') === logo) {
  firstClick(lineOne, 5, 5);
    }
    if (lineTwo[0].getAttribute('src') === logo) {
  firstClick(lineTwo, 0, 0);
    }
    if (lineTwo[1].getAttribute('src') === logo) {
  firstClick(lineTwo, 1, 1);
    }
    if (lineTwo[2].getAttribute('src') === logo) {
  firstClick(lineTwo, 2, 2);
    }
    if (lineTwo[3].getAttribute('src') === logo) {
  firstClick(lineTwo, 3, 3);
    }
    if (lineTwo[4].getAttribute('src') === logo) {
  firstClick(lineTwo, 4, 4);
    }
    if (lineTwo[5].getAttribute('src') === logo) {
  firstClick(lineTwo, 5, 5);
    }
    if (lineThree[0].getAttribute('src') === logo) {
  firstClick(lineThree, 0, 0);
    }
    if (lineThree[1].getAttribute('src') === logo) {
  firstClick(lineThree, 1, 1);
    }
    if (lineThree[2].getAttribute('src') === logo) {
  firstClick(lineThree, 2, 2);
    }
    if (lineThree[3].getAttribute('src') === logo) {
  firstClick(lineThree, 3, 3);
    }
    if (lineThree[4].getAttribute('src') === logo) {
  firstClick(lineThree, 4, 4);
    }
    if (lineThree[5].getAttribute('src') === logo) {
  firstClick(lineThree, 5, 5);
    }
  firstClick(lineFour, 0, 0);
  firstClick(lineFour, 1, 1);
  firstClick(lineFour, 2, 2);
  firstClick(lineFour, 3, 3);
  firstClick(lineFour, 4, 4);
  firstClick(lineFour, 5, 5);
  }
  startGame()
  button.addEventListener('click', function() {
    if (checkMatch[0].getAttribute('src') !== checkMatch[1].getAttribute('src')) {
      checkMatch[0].setAttribute('src', logo);
      checkMatch[1].setAttribute('src', logo);
      while (checkMatch.length > 0) {
        checkMatch.pop()
      }
      startGame()
    } else {
      while (checkMatch.length > 0) {
        checkMatch.pop()
      }
      startGame();
    }
  })


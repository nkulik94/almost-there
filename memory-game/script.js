const oneOne = document.getElementById('1-1');
const oneTwo = document.getElementById('1-2');
const oneThree = document.getElementById('1-3');
const oneFour = document.getElementById('1-4');
const mordyChalk = "./pics/mordy-chalk.jpg";
const kidsStore = "./pics/kids-store.jpg";
const checkMatch = [];
const mordyChalkArray = [];
const kidsStoreArray = [];
function makeMordyChalk(pic) {
    pic.addEventListener("click", function() {
        pic.setAttribute('src', mordyChalk);
        mordyChalkArray.push(pic);
        checkMatch.push(pic);
    })
};
function makeKidsStore(pic) {
    pic.addEventListener('click', function() {
        pic.setAttribute('src', kidsStore);
        kidsStoreArray.push(pic);
        checkMatch.push(pic);
    })
};
function flipCards() {
    while (checkMatch.length < 2) {
        makeMordyChalk(oneOne);
        makeMordyChalk(oneThree);
        makeKidsStore(oneTwo);
        makeKidsStore(oneFour);
    }
}
flipCards()


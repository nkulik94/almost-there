const oneOne = document.getElementById('1-1');
const oneTwo = document.getElementById('1-2');
const oneThree = document.getElementById('1-3');
const oneFour = document.getElementById('1-4');
const button = document.getElementById('continue');
const logo = 'card-logo.jpg'
const mordyChalk = "./pics/mordy-chalk.jpg";
const kidsStore = "./pics/kids-store.jpg";
const checkMatch = [];
const mordyChalkArray = [];
const kidsStoreArray = [];
function thirdClick() {
    if (mordyChalkArray.length === 1){
        button.addEventListener('click', function() {
            mordyChalkArray[0].setAttribute('src', logo)
        })}
}
function secondClick() {
    function makeMordyChalk(pic) {
        pic.addEventListener("click", function() {
            if (checkMatch.length === 1) {
            pic.setAttribute('src', mordyChalk);
            mordyChalkArray.push(pic);
            checkMatch.push(pic);
            thirdClick()
        }})
    };
    function makeKidsStore(pic) {
        pic.addEventListener('click', function() {
            if (checkMatch.length === 1) {
            pic.setAttribute('src', kidsStore);
            kidsStoreArray.push(pic);
            checkMatch.push(pic);
            thirdClick()
        }})
    }
    if (oneTwo !== kidsStoreArray[0]) {
    makeKidsStore(oneTwo)};
    if (oneOne !== mordyChalkArray[0]) {
    makeMordyChalk(oneOne)};
    if (oneFour !== kidsStoreArray[0]) {
    makeKidsStore(oneFour)};
    if (oneThree !== mordyChalkArray[0]) {
    makeMordyChalk(oneThree)};
}
function firstClick() {
function makeMordyChalk(pic) {
    pic.addEventListener("click", function() {
        if (mordyChalkArray.length < 2) {
        if (checkMatch.length === 0) {
        pic.setAttribute('src', mordyChalk);
        mordyChalkArray.push(pic);
        checkMatch.push(pic);
        secondClick();
    }}})
};
function makeKidsStore(pic) {
    pic.addEventListener('click', function() {
        if (checkMatch.length === 0) {
        pic.setAttribute('src', kidsStore);
        kidsStoreArray.push(pic);
        checkMatch.push(pic);
        secondClick();
    }})
}
makeKidsStore(oneTwo);
makeMordyChalk(oneOne);
makeKidsStore(oneFour);
makeMordyChalk(oneThree);
};
firstClick()

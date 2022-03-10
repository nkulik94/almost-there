const oneOne = document.getElementById('1-1');
const oneTwo = document.getElementById('1-2');
const oneThree = document.getElementById('1-3');
const oneFour = document.getElementById('1-4');
const mordyChalk = "./pics/mordy-chalk.jpg";
const kidsStore = "./pics/kids-store.jpg";
const checkMatch = [];
const mordyChalkArray = [];
const kidsStoreArray = [];
function secondClick() {
    function makeMordyChalk(pic) {
        pic.addEventListener("click", function() {
            if (checkMatch.length === 1) {
            pic.setAttribute('src', mordyChalk);
            mordyChalkArray.push(pic);
            checkMatch.push(pic);
        }})
    };
    function makeKidsStore(pic) {
        pic.addEventListener('click', function() {
            if (checkMatch.length === 1) {
            pic.setAttribute('src', kidsStore);
            kidsStoreArray.push(pic);
            checkMatch.push(pic);
        }})
    }
    makeKidsStore(oneTwo);
    makeMordyChalk(oneOne);
    makeKidsStore(oneFour);
    makeMordyChalk(oneThree);
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
import functions from './functions.js';

// ========== The Basic DOM Exercise ==========
document.getElementById("basicDiv").addEventListener ('click', ((event) => {
    console.log(event);
}));

showBtn.addEventListener ('click', (() => {
    console.log(olList.children);
}));

addBottomBtn.addEventListener('click', (() => {
    functions.addLiFromBottom(olList);
}));

addTopBtn.addEventListener('click', (() => {
    functions.addLiFromTop(olList);
}));

deleteBottomBtn.addEventListener('click', (() => {
    functions.deleteLiFromBottom(olList);
}));

deleteTopBtn.addEventListener('click', (() => {
    functions.deleteLiFromTop(olList);
}));

// ========== Working with Cards ==========
addCard.addEventListener('click', (() => {
    functions.addCard(cardContainer);
}));
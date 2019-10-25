import functions from './functions.js';

// ========== The Basic DOM Exercise ==========
basicDiv.addEventListener ('click', ((event) => {
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
let cardCount = cardContainer.getElementsByClassName("card").length;
let cardElement;
let result = [];

addCard.addEventListener('click', (() => {
    result = functions.addCard(cardContainer, cardCount);
    cardCount = result[1];
}));

cardContainer.addEventListener('click', ((event) => {
    switch (event.target.className) {
        case "addBefore":
            cardElement = event.target.parentElement.parentElement;
            result = functions.addBefore(cardElement, cardCount);
            cardCount = result[1];
            break;
        case "addAfter":
            cardElement = event.target.parentElement.parentElement;
            result = functions.addAfter(cardElement, cardCount);
            cardCount = result[1];
            break;
        case "delete":
            cardElement = event.target.parentElement.parentElement;
            functions.deleteCard(cardElement);
            break;
    }
}));


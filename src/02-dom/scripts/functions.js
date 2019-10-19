
const functions = {
    
    // ========== The Basic DOM Exercise ==========
    addLiFromBottom: (olElement) => {
        let liList = olElement.querySelectorAll("li");
        let newLi = document.createElement("li");
        let textNode = document.createTextNode("Item " + (liList.length+1));
        newLi.appendChild(textNode);
        olElement.appendChild(newLi);
        return olElement;
    },

    addLiFromTop: (olElement) => {
        let liList = olElement.querySelectorAll("li");
        let newLi = document.createElement("li");
        let textNode = document.createTextNode("Item " + (liList.length + 1));
        newLi.appendChild(textNode);
        olElement.insertBefore(newLi, olElement.childNodes[0]);
        return olElement;        
    },

    deleteLiFromBottom: (olElement) => {
        let liList = olElement.querySelectorAll("li");
        let last = liList.length-1;
        olElement.removeChild(olElement.children[last]);
        return olElement;
    },

    deleteLiFromTop: (olElement) => {
        olElement.removeChild(olElement.children[0]);
        return olElement;
    },

    // ========== Working with Cards ==========

    createNewCard: (cardCount) => {
        cardCount++;
        // create parent div
        let newParentDiv = document.createElement("div");
        newParentDiv.className = "card";

        // create h3 tag and append to parent div
        let h3 = document.createElement("h3");
        let h3Content = document.createTextNode("Card " + (cardCount));
        h3.appendChild(h3Content);
        newParentDiv.appendChild(h3);

        // create 1st child div
        let childDiv1 = document.createElement("div");

        // create "add before" button
        let newAddBeforeBtn = document.createElement("button");
        newAddBeforeBtn.className = "addBefore";
        let addBeforeBtnContent = document.createTextNode("Add Before");

        // append button to 1st child div
        newAddBeforeBtn.appendChild(addBeforeBtnContent);
        childDiv1.appendChild(newAddBeforeBtn);

        // create "add after" button
        let newAddAfterBtn = document.createElement("button");
        newAddAfterBtn.className = "addAfter";
        let addAfterBtnContent = document.createTextNode("Add After");

        // append button to 1st child div
        newAddAfterBtn.appendChild(addAfterBtnContent);
        childDiv1.appendChild(newAddAfterBtn);
        newParentDiv.appendChild(childDiv1);

        // create 2nd child div
        let childDiv2 = document.createElement("div");

        // create "delete" button
        let newDeleteCardBtn = document.createElement("button");
        newDeleteCardBtn.className = "delete";
        let deleteCardBtnContent = document.createTextNode("Delete");

        // append button to 2nd child div
        newDeleteCardBtn.appendChild(deleteCardBtnContent);
        childDiv2.appendChild(newDeleteCardBtn);
        newParentDiv.appendChild(childDiv2);

        // return 2 parameters back using array
        return [newParentDiv, cardCount];
    },

    addCard: (cardContainer, cardCount) => {
        let returnValue = functions.createNewCard(cardCount);
        let newDiv = returnValue[0];
        let newCardCount = returnValue[1];
        cardContainer.appendChild(newDiv);
        return [cardContainer, newCardCount];
    },

    deleteCard: (element) => {
        let parent = element.parentElement; 
        element.remove();
        return parent;
    },

    addBefore: (element, cardCount) => {
        let parent = element.parentElement;

        let returnValue = functions.createNewCard(cardCount);
        let newDiv = returnValue[0];
        let newCardCount = returnValue[1];

        parent.insertBefore(newDiv, element);
        return [parent, newCardCount];
    },

    addAfter: (element, cardCount) => {
        // get parent element
        let parent = element.parentElement;

        // create new 'card' and increase 'card count'
        let returnValue = functions.createNewCard(cardCount);
        let newDiv = returnValue[0];
        let newCardCount = returnValue[1];

        //insert new card before the next silbling....COOL!!!!
        parent.insertBefore(newDiv, element.nextSibling);
        return [parent, newCardCount];
    } 
};
export default functions;


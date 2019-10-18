
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
    addCard: (cardContainer) => {
        // add first div <div class="card">
        let cardInStack = cardContainer.getElementsByClassName("card").length;
        let newCardDiv = document.createElement("div");
        newCardDiv.setAttribute("Class", "card");

            let h5 = document.createElement("h5");
            let h5Content = document.createTextNode("Card " + (cardInStack + 1));

            h5.appendChild(h5Content);
            newCardDiv.appendChild(h5);

        // add second div <div class="margin5px">
        let newMargin5pxDiv1 = document.createElement("div");
        newMargin5pxDiv1.setAttribute("Class", "margin5px");

            let newAddBeforeBtn = document.createElement("button");
            newAddBeforeBtn.setAttribute("Class", "addBeforeBtn");
            let addBeforeBtnContent = document.createTextNode("Add Before");

            newAddBeforeBtn.appendChild(addBeforeBtnContent);
            newMargin5pxDiv1.appendChild(newAddBeforeBtn);

            let newAddAfterBtn = document.createElement("button");
            newAddAfterBtn.setAttribute("Class", "addAfterBtn");
            let addAfterBtnContent = document.createTextNode("Add After");

            newAddAfterBtn.appendChild(addAfterBtnContent);
            newMargin5pxDiv1.appendChild(newAddAfterBtn);
            newCardDiv.appendChild(newMargin5pxDiv1);

        // add second div <div class="margin5px">
        let newMargin5pxDiv2 = document.createElement("div");
        newMargin5pxDiv2.setAttribute("Class", "margin5px");

            let newDeleteCardBtn = document.createElement("button");
            newDeleteCardBtn.setAttribute("Class", "deleteCardBtn");
            let deleteCardBtnContent = document.createTextNode("Delete");

            newDeleteCardBtn.appendChild(deleteCardBtnContent);
            newMargin5pxDiv2.appendChild(newDeleteCardBtn);
            newCardDiv.appendChild(newMargin5pxDiv2);

        cardContainer.appendChild(newCardDiv);
        return cardContainer;
    }
};

export default functions;


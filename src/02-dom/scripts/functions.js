
const functions = {
    
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
    }
    
};

export default functions;


import functions from './functions'

// ========== Add, delete li elements ========== 

let myOl = document.createElement("ol");
let NewLi = document.createElement("li");
let textNode = document.createTextNode("Item 1");
NewLi.appendChild(textNode);
myOl.appendChild(NewLi); 

test('adding and deleting child elements', () => {
    expect(functions.addLiFromBottom(myOl).childElementCount).toEqual(2);
    expect(functions.addLiFromTop(myOl).childElementCount).toEqual(3);
    expect(functions.deleteLiFromBottom(myOl).childElementCount).toEqual(2);
    expect(functions.deleteLiFromTop(myOl).childElementCount).toEqual(1);
});
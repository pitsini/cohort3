import functions from './functions'

    // ========== The Basic DOM Exercise ==========
    let myOl = document.createElement("ol");
    let NewLi = document.createElement("li");
    let textNode = document.createTextNode("Item 1");
    NewLi.appendChild(textNode);
    myOl.appendChild(NewLi); 

    test('The Basic DOM Exercise', () => {
        expect(functions.addLiFromBottom(myOl).childElementCount).toEqual(2);
        expect(functions.addLiFromTop(myOl).childElementCount).toEqual(3);
        expect(functions.deleteLiFromBottom(myOl).childElementCount).toEqual(2);
        expect(functions.deleteLiFromTop(myOl).childElementCount).toEqual(1);
    });

    // ========== Working with Cards ==========
    let mycardContainer = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.setAttribute("Class", "addCard");
    div2.setAttribute("Class", "card");

    mycardContainer.appendChild(div1);
    mycardContainer.appendChild(div2);

    test('Working with Cards', () => {
        expect(functions.addCard(mycardContainer).childElementCount).toEqual(3);
    });
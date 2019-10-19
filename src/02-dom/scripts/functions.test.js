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
    let div1 = document.createElement("div");   // create 2 div elements
    let div2 = document.createElement("div");
    div1.className = "card";                    // give them classname
    div2.className = "card";

    mycardContainer.appendChild(div1);          // append both divs(children) to cardContainer(parent)
    mycardContainer.appendChild(div2);

    let childCount = mycardContainer.childElementCount;

    test('Working with Cards', () => {
        //check how many child that cardContainer has after running function
        expect(functions.addCard(mycardContainer, childCount)[0].childElementCount).toEqual(3); 
        expect(functions.addCard(mycardContainer, childCount)[0].childElementCount).toEqual(4);
        expect(functions.deleteCard(mycardContainer.children[0]).childElementCount).toEqual(3);
        expect(functions.deleteCard(mycardContainer.children[1]).childElementCount).toEqual(2);
    });
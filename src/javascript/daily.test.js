import functions from './daily.js'
/*	
    Daily Exercises - makeEmailObj - October 11, 2019
	Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

/*
    Daily Exercises - makeEmailArr - October 9, 2019
    Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// --- Daily Exercises - AssertEquals - October 7, 2019 ---
test('Compare parameter', () => {
    expect(functions.assertEquals(10, 10)).toBe(true);
    expect(functions.assertEquals(-1, -1)).toBe(true);   
    expect(functions.assertEquals("10", "10")).toBe(true);
    expect(functions.assertEquals("John", "John")).toBe(true); 
    expect(functions.assertEquals(10, -10)).toBe(false);
    expect(functions.assertEquals("10", 10)).toBe(false);
    expect(functions.assertEquals("John", "john")).toBe(false);
});


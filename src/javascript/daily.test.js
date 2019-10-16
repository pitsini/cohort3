import functions from './daily.js'
/*	
    Daily Exercises - Prepare for Array Work - October 15, 2019
	Write the function to create examples of for, while, do while, for in, for of
*/
test('prepare for Array work', () => {
    const arr = [1,2,3,4,5];
    expect(functions.sumFromArray(arr)).toEqual(15);
    expect(functions.doubleArray(arr)).toEqual([2,4,6,8,10]);
    expect(functions.subtractBy1(arr)).toEqual([0,1,2,3,4]);
    expect(functions.totalPrice(arr)).toEqual(15);
    expect(functions.addExclamationMark(arr)).toEqual(["$1", "$2", "$3", "$4", "$5"]);
});

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
    // expect(functions.assertEquals(10, 10)).toBe(true);
    // expect(functions.assertEquals(-1, -1)).toBe(true);   
    // expect(functions.assertEquals("10", "10")).toBe(true);
    // expect(functions.assertEquals("John", "John")).toBe(true); 
    // expect(functions.assertEquals(10, -10)).toBe(false);
    // expect(functions.assertEquals("10", 10)).toBe(false);
    // expect(functions.assertEquals("John", "john")).toBe(false);
});


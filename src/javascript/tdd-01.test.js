import functions from "./tdd-01.js";
/*
    let's play a little game here.... 
    stand if you think this test will execute successfully
*/

test('hello world console.log1', () => {
    console.log("Hello World 1");
});

test('hello world console.log2', () => {
    // console.log("Hello World 2");
    expect('abcd').toEqual('abcd');
});

test('check an array see if it is the same', () => {
    expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
});

test('email', () => {
    expect(functions.emailBuilder("larry", "shumlich")).toEqual("l.shumlich@evolveu.ca");
});



/*
    run it for your self
    create a file in /src/javascript/tdd-01.test.js
    you will be checking this in
*/

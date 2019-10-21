import functions from './syntax.js'

test('defineVariables function', () => {
    let var1; //to test undefined variable
    expect(functions.defineVariables(100)).toBe("number");
    expect(functions.defineVariables("100")).toBe("string");
    expect(functions.defineVariables("John")).toBe("string");
    expect(functions.defineVariables(1 === 1)).toBe("boolean");
    expect(functions.defineVariables([1,3,5])).toBe("array");    
    expect(functions.defineVariables({a:1})).toBe("object"); 
    expect(functions.defineVariables(var1)).toBe("undefined");   
    expect(functions.defineVariables(function myFunc() { })).toBe("There is none of above.");
    // There is none of above.
 });

test('ifElse function', () => {
    expect(functions.ifElse(-5)).toBe("You are not born");
    expect(functions.ifElse(6)).toBe("You are a kid");
    expect(functions.ifElse(16)).toBe("You are teenager");
    expect(functions.ifElse(30)).toBe("You are old!");
});

test('showName function', () => {
    expect(functions.showName("Bob", "dinosour", "rainbow")).toBe("Hello! My name is Bob. I'm a rainbow dinosour.");
});

const tray = ["oranges", "grapes", "banana"];
const fruitToAdd = "strawberries";

test('arrayUnshift function', () => {
    let newTray = functions.arrayUnshift(fruitToAdd, tray);
    expect(newTray[0]).toBe(fruitToAdd);
});

test('arrayPush function', () => {
    let newTray = functions.arrayPush(fruitToAdd, tray);
    let lastIndex = newTray.length-1;
    expect(newTray[lastIndex]).toBe(fruitToAdd);
});

test('SumFrom1toN function', () => {
    expect(functions.SumFrom1toN(3)).toBe(6);
});

test('TotalPrice function', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(functions.TotalPrice(obj)).toBe(6);
});

test('addEvenNumber function', () => {
    expect(functions.addEvenNumber(3)).toBe(12);
});

test('addOddNumber function', () => {
    expect(functions.addOddNumber(3)).toBe(9);
});

test('sumValueInArray function', () => {
    const arr = [1,2,3];
    expect(functions.sumValueInArray(arr)).toBe(6);
});

test('phoneNumberSearch function', () => {
    const phoneBook = {
        name: "Sarah",
        age: "34",
        phone: "(403)111-5555"
    };
    expect(functions.phoneNumberSearch(phoneBook, "Sarah")).toBe("(403)111-5555");
    expect(functions.phoneNumberSearch(phoneBook, "John")).toBe("John can't be found.");
});
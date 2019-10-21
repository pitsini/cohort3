const functions = {
// define attributes / variables
    // number --
    // string
    // boolean
    // array --
    // dictionary / objects
    // undefined
    defineVariables: (text) => {
        if (Array.isArray(text)) {
            return "array"
        } else if (typeof (text) === "number" || text === undefined || typeof(text) === "string" || typeof(text) === "object" || typeof(text) === "boolean") {
            return typeof(text);            
        } else {
            return "There is none of above.";
        }
    },
//------------------------------
// sample if / else
    ifElse: (age) => {
        if (age < 0) { 
            return "You are not born";
        } else if (age < 10) {
            return "You are a kid";
        } else if (age < 20) {
            return "You are teenager";
        } else {
            return "You are old!";
        }
    },
//------------------------------
// functions
    // parameters
    // returns
    showName: (name, animal, color) => `Hello! My name is ${name}. I'm a ${color} ${animal}.`,
//------------------------------
// arrays
    // add to the front
    // add to the end
    // update values    
    arrayUnshift: (fruitToAdd, basket) => {
        basket.unshift(fruitToAdd);
        return basket;
    },

    arrayPush: (fruitToAdd, basket) => {
        basket.push(fruitToAdd);
        return basket;
    },
    
//------------------------------
// loops
    // for
    SumFrom1toN: (num) => {
        let summary = 0;
        for (let i = 1; i <= num; i++) {
            summary = summary + i;
        }
        return summary;
    },

    // for/in
    TotalPrice: (obj) => {
        let sum = 0;
        for (const price in obj) {
            sum = sum + obj[price];
        }
        return sum;
    },

    // while
    addEvenNumber: (num) => {
        let result = 0;
        let i = 1;
        while (i <= num) {
            result = result + (i*2);
            i++;
        }
        return result;
    },

    // do while
    addOddNumber: (num) => {
        let result = 0;
        let i = 1;
        do {
            result = result + ((i*2)-1);
            i++;
        }
        while (i <= num);
        return result;
    },

    // forEach(with array and function)
    sumValueInArray: (array) => {
        let sum = 0;
        array.forEach((num) => {
            sum = sum + num;
        }); 
        return sum;    
    },
//------------------------------
// Objects / Dictionaries
    // declare object
    // lookup key to retrieve value
    phoneNumberSearch: (obj, name) => {
        let phoneFound = "";
        if (obj.name.includes(name)) {
            phoneFound = obj.phone;
        } else {
            return `${name} can't be found.`;
        }
        return phoneFound;
    }
};
export default functions;